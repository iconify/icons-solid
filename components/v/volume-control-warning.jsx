import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wjym82z8l.css';
import '../../css/f/fll0uqb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wjym82z8l"/><path class="fll0uqb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:volume-control-warning"} {...others} />);
}

export default Component;
