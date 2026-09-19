import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c54mrrbsr.css';
import '../../css/k/kue8ccbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c54mrrbsr"/><path class="kue8ccbkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:structure-05"} {...others} />);
}

export default Component;
