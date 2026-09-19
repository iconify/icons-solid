import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ocr4r30uq.css';
import '../../css/c/c1t6ucbve.css';
import '../../css/o/oae0thbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ocr4r30uq"/><path class="c1t6ucbve"/><path class="oae0thbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-07"} {...others} />);
}

export default Component;
