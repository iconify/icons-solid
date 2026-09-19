import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqukjzb3t.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="xqukjzb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:person-crop-circle-fill-badge-plus"} {...others} />);
}

export default Component;
