import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfnld8b9e.css';
import '../../css/h/hum_vbh1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zfnld8b9e"/><path class="hum_vbh1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-copy-alt"} {...others} />);
}

export default Component;
