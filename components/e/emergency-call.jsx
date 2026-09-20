import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3osa8bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3osa8bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:emergency-call"} {...others} />);
}

export default Component;
