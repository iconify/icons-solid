import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/an_mlb32z.css';
import '../../css/m/mk7yxyjzl.css';
import '../../css/f/fle9pybiz.css';
import '../../css/k/k5goikzcf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="an_mlb32z"/><path class="mk7yxyjzl"/><path class="fle9pybiz"/><path class="k5goikzcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cloud-block"} {...others} />);
}

export default Component;
