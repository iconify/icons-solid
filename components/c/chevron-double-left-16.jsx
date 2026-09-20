import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwrqztgnf.css';
import '../../css/d/dg2c6-gpi.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hwrqztgnf"/><path clip-rule="evenodd" class="dg2c6-gpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:chevron-double-left-16"} {...others} />);
}

export default Component;
