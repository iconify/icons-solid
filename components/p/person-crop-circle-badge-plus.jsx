import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz-0psbpt.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="xz-0psbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:person-crop-circle-badge-plus"} {...others} />);
}

export default Component;
