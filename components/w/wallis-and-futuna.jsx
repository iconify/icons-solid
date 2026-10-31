import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkjv3ybyr.css';
import '../../css/z/zc-w15bqg.css';
import '../../css/y/y4kj_7blv.css';
import '../../css/i/ifll36buk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="kkjv3ybyr"/><path class="zc-w15bqg"/><path class="y4kj_7blv"/><path class="ifll36buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:wallis-and-futuna"} {...others} />);
}

export default Component;
