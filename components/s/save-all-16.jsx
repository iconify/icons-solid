import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv05p5bjy.css';
import '../../css/z/zu9zkld_z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xv05p5bjy"/><path clip-rule="evenodd" class="zu9zkld_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:save-all-16"} {...others} />);
}

export default Component;
