import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykltvrbat.css';
import '../../css/l/l6dxx07jx.css';
import '../../css/f/f9qpihbxq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ykltvrbat"/><path class="l6dxx07jx"/><path class="f9qpihbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lastquartermoonface"} {...others} />);
}

export default Component;
