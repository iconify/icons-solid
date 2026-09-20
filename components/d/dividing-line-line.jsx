import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlhv9ehzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xlhv9ehzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dividing-line-line"} {...others} />);
}

export default Component;
