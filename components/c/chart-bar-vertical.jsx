import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewhpzpbkp.css';
import '../../css/l/lk5oz1brv.css';
import '../../css/k/k5utfwxvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ewhpzpbkp"/><path class="lk5oz1brv"/><path class="k5utfwxvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-bar-vertical"} {...others} />);
}

export default Component;
