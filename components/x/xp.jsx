import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qhnjuqbov.css';
import '../../css/f/fv83j5bne.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="qhnjuqbov"/><path class="fv83j5bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xp"} {...others} />);
}

export default Component;
