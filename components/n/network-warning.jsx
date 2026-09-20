import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jjyi-2tjx.css';
import '../../css/c/c7ti4sbjw.css';
import '../../css/f/fll0uqb6i.css';
import '../../css/c/c59sr6bdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jjyi-2tjx"/><path class="c7ti4sbjw"/><path class="fll0uqb6i"/><path class="c59sr6bdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-warning"} {...others} />);
}

export default Component;
