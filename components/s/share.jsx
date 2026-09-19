import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jrxssqnyz.css';
import '../../css/r/rzyzgqcqn.css';
import '../../css/t/ticjgqbdl.css';
import '../../css/f/fex6dubso.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="jrxssqnyz"/><circle class="rzyzgqcqn"/><circle class="ticjgqbdl"/><path class="fex6dubso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:share"} {...others} />);
}

export default Component;
