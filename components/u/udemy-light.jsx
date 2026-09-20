import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqqwlubai.css';
import '../../css/e/eugy_9b7o.css';

const viewBox = {"width":91,"height":34};
const content = `<g class="ft5dv1b6b"><path class="rqqwlubai"/><path class="eugy_9b7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:udemy-light"} {...others} />);
}

export default Component;
