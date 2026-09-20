import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2y0d8bfl.css';
import '../../css/e/exps9_t7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2y0d8bfl"/><path class="exps9_t7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hail-line"} {...others} />);
}

export default Component;
