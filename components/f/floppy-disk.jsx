import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um34ubtfl.css';
import '../../css/o/odpe3tbca.css';
import '../../css/i/iostzby_w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="um34ubtfl"/><path class="odpe3tbca"/><path class="iostzby_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:floppy-disk"} {...others} />);
}

export default Component;
