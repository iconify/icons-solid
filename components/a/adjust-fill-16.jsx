import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzy9h7dbn.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-fdf_0vb.css';
import '../../css/o/opnvl90cu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jzy9h7dbn"/><g class="cuyn6tgcc"><circle class="n-fdf_0vb"/><circle class="opnvl90cu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:adjust-fill-16"} {...others} />);
}

export default Component;
