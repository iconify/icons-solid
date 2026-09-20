import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ctd9pz-6t.css';
import '../../css/o/orhsnwbov.css';
import '../../css/a/awsc9pb4z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ctd9pz-6t"/><path class="orhsnwbov"/><path class="awsc9pb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:lift-disability"} {...others} />);
}

export default Component;
