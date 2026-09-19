import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9zde8_tk.css';
import '../../css/z/zj6og8p4y.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 g9zde8_tk"/><circle class="clr-i-outline clr-i-outline-path-2 zj6og8p4y" transform="rotate(-45 27.132 27.092)"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:wrench-line"} {...others} />);
}

export default Component;
