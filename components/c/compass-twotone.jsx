import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceaf9c7tx.css';
import '../../css/w/wzastfpvt.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ceaf9c7tx"/><path class="wzastfpvt"/><path class="yv_brepse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:compass-twotone"} {...others} />);
}

export default Component;
