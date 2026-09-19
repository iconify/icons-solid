import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/r/rkhkgmbuh.css';
import '../../css/r/r361ix1oe.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="rkhkgmbuh"/><path class="r361ix1oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:frown-twotone"} {...others} />);
}

export default Component;
