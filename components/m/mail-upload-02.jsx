import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/psy6-5bna.css';
import '../../css/x/xk75u8b-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="psy6-5bna"/><path class="xk75u8b-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-upload-02"} {...others} />);
}

export default Component;
