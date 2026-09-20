import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m38kuougp.css';
import '../../css/p/p-gvo6b8i.css';
import '../../css/o/o_zvveb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m38kuougp"/><path class="p-gvo6b8i"/><path class="o_zvveb0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-smartphone-protection"} {...others} />);
}

export default Component;
