import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z8o0q8tuy.css';
import '../../css/k/kqvm8rt-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z8o0q8tuy"/><path class="kqvm8rt-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:calculator"} {...others} />);
}

export default Component;
