import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2j6rdzub.css';
import '../../css/b/b77nu__pl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o2j6rdzub"/><path class="b77nu__pl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-card-minus"} {...others} />);
}

export default Component;
