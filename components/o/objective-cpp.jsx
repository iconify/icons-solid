import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc_2pfb3v.css';
import '../../css/z/zz8dk9k1j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xc_2pfb3v"/><path class="zz8dk9k1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:objective-cpp"} {...others} />);
}

export default Component;
