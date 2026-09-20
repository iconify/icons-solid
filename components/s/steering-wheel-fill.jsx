import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi95u7abw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi95u7abw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:steering-wheel-fill"} {...others} />);
}

export default Component;
