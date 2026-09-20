import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbj_d9baz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zbj_d9baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:alert-diamond-line"} {...others} />);
}

export default Component;
