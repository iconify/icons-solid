import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it7bmrvix.css';
import '../../css/d/d05ezgbdr.css';
import '../../css/z/zs9_7gjzc.css';
import '../../css/v/vy3fs68jo.css';
import '../../css/v/vc-dgdc6s.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="it7bmrvix"/><path class="d05ezgbdr"/><path class="zs9_7gjzc"/><path class="vy3fs68jo"/><path class="vc-dgdc6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:sri-lanka"} {...others} />);
}

export default Component;
