import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_hxwwbci.css';
import '../../css/h/hxbk2cgzs.css';
import '../../css/p/p_2pe_b8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_hxwwbci"/><path class="hxbk2cgzs"/><path class="p_2pe_b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-visible-filled"} {...others} />);
}

export default Component;
