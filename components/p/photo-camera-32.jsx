import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phr1lacdp.css';
import '../../css/c/cvbt36bli.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="phr1lacdp"/><path clip-rule="evenodd" class="cvbt36bli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:photo-camera-32"} {...others} />);
}

export default Component;
