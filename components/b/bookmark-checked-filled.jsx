import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doy9r2tnq.css';
import '../../css/z/z5bx1-wjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="doy9r2tnq"/><path class="z5bx1-wjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bookmark-checked-filled"} {...others} />);
}

export default Component;
