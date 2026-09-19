import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z5xqi1bik.css';
import '../../css/a/a-ft82baw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="z5xqi1bik"/><path class="a-ft82baw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:legal-01"} {...others} />);
}

export default Component;
