import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ol6l3n84p.css';
import '../../css/n/nzaemzbdu.css';
import '../../css/e/e7jwi8bqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ol6l3n84p"/><path class="nzaemzbdu"/><path class="e7jwi8bqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-sparkle"} {...others} />);
}

export default Component;
