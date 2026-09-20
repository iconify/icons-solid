import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f1rl1zbis.css';
import '../../css/r/r38qfgbjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f1rl1zbis"/><path class="r38qfgbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:blizzards-1-natural-disasters-blizzards-snow"} {...others} />);
}

export default Component;
