import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egr9hrb-r.css';
import '../../css/z/zhxx2z6mr.css';
import '../../css/i/iw63emb2i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="egr9hrb-r"/><path class="zhxx2z6mr"/><path class="iw63emb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lasso-20-bold"} {...others} />);
}

export default Component;
