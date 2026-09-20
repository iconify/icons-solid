import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inq2hh19w.css';
import '../../css/q/qyhjd8bnv.css';

const viewBox = {"width":74,"height":74};
const content = `<g class="ft5dv1b6b"><path class="inq2hh19w"/><path class="qyhjd8bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:heroui-light"} {...others} />);
}

export default Component;
