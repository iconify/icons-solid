import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/af7b8co5r.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="af7b8co5r"/><path class="ykzxdyblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-check"} {...others} />);
}

export default Component;
