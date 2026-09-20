import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o799grbnj.css';
import '../../css/u/u8zrg7bhy.css';
import '../../css/e/er-w92bug.css';
import '../../css/r/rn1y9lnpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="o799grbnj"><path class="u8zrg7bhy"/><path class="er-w92bug"/><path class="rn1y9lnpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:window-bookmark"} {...others} />);
}

export default Component;
