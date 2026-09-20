import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymw3uvdzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ymw3uvdzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bilibili-fill"} {...others} />);
}

export default Component;
