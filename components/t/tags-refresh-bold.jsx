import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5fyvxggv.css';
import '../../css/k/k3qeubcag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d5fyvxggv"/><path class="k3qeubcag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tags-refresh-bold"} {...others} />);
}

export default Component;
