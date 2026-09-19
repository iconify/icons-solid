import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0wygnbbs.css';
import '../../css/i/i9jj_iuuz.css';
import '../../css/z/zzj8l2b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0wygnbbs"/><path class="i9jj_iuuz"/><path class="zzj8l2b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-redux"} {...others} />);
}

export default Component;
