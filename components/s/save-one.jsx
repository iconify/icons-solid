import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/w/w80ub_bgs.css';
import '../../css/g/gz22pbbvy.css';
import '../../css/i/i-r6eqbky.css';
import '../../css/c/ca0jvcbbj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="w80ub_bgs"/><path class="gz22pbbvy"/><path class="i-r6eqbky"/><path class="ca0jvcbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:save-one"} {...others} />);
}

export default Component;
