import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lcf8j-but.css';
import '../../css/o/oux4yxb1b.css';
import '../../css/n/n_74cbbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lcf8j-but"/><path class="oux4yxb1b"/><path class="n_74cbbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:swatch-book"} {...others} />);
}

export default Component;
