import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oem44ybqf.css';
import '../../css/t/t-5uokbzr.css';
import '../../css/b/b9k-ty8do.css';
import '../../css/v/vb30fdm_w.css';
import '../../css/b/bz9yd9bkh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oem44ybqf"/><path class="t-5uokbzr"/><path class="b9k-ty8do"/><path class="vb30fdm_w"/><path class="bz9yd9bkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:pet-animals-buffalo"} {...others} />);
}

export default Component;
