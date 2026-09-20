import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugg4w_bmp.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ugg4w_bmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:spinner-arrow"} {...others} />);
}

export default Component;
