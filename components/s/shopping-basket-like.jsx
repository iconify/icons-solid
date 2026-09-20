import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8rjv_buc.css';
import '../../css/t/tc-p6bfqy.css';
import '../../css/g/g7a9vub4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x8rjv_buc"/><path class="tc-p6bfqy"/><path class="g7a9vub4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-basket-like"} {...others} />);
}

export default Component;
