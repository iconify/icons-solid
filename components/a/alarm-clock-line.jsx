import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clcsdocbl.css';
import '../../css/a/a519wcbzu.css';
import '../../css/a/au8hn2byf.css';
import '../../css/z/zs6fjgvtu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clcsdocbl clr-i-outline clr-i-outline-path-1"/><path class="a519wcbzu clr-i-outline clr-i-outline-path-2"/><path class="au8hn2byf clr-i-outline clr-i-outline-path-3"/><path class="clr-i-outline clr-i-outline-path-4 zs6fjgvtu"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:alarm-clock-line"} {...others} />);
}

export default Component;
