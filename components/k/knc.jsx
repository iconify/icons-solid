import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_e628bht.css';
import '../../css/m/md286fbip.css';
import '../../css/e/eoq7jqbkh.css';
import '../../css/u/uqman41yd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="a_e628bht"/><g class="md286fbip"><path class="eoq7jqbkh"/><path class="uqman41yd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:knc"} {...others} />);
}

export default Component;
