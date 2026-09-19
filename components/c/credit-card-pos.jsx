import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ovsdc6bkd.css';
import '../../css/r/rymh20rko.css';
import '../../css/o/o05ivylqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ovsdc6bkd"/><path class="rymh20rko"/><path class="o05ivylqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card-pos"} {...others} />);
}

export default Component;
