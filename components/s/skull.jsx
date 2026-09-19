import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c974-jgxw.css';
import '../../css/h/hi4pc4bnr.css';
import '../../css/v/v15isc0yr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="c974-jgxw"/><circle class="hi4pc4bnr"/><circle class="v15isc0yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:skull"} {...others} />);
}

export default Component;
