import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh6ubzb2y.css';
import '../../css/b/byjpcpbho.css';
import '../../css/h/h1p9bccth.css';
import '../../css/l/l_nf0hbpq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zh6ubzb2y"/><path class="byjpcpbho"/><path class="h1p9bccth"/><path class="l_nf0hbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-sushi"} {...others} />);
}

export default Component;
