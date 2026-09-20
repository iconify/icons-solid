import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fewaveakl.css';
import '../../css/k/ky4905xsu.css';
import '../../css/z/znvvmubwx.css';
import '../../css/m/m2te1-oby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fewaveakl"/><path class="ky4905xsu"/><path class="znvvmubwx"/><path class="m2te1-oby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rwn"} {...others} />);
}

export default Component;
