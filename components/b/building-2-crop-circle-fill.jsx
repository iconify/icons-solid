import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv71dh3kj.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="xv71dh3kj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:building-2-crop-circle-fill"} {...others} />);
}

export default Component;
