import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1l45ccjy.css';
import '../../css/b/b-5uoz78u.css';
import '../../css/a/a4yfnabqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x1l45ccjy"/><path class="b-5uoz78u"/><path class="a4yfnabqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:avt"} {...others} />);
}

export default Component;
