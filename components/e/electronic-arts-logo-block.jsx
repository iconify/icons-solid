import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf5tjob_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xf5tjob_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:electronic-arts-logo-block"} {...others} />);
}

export default Component;
