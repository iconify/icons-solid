import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw1-8ybcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kw1-8ybcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:text-align-justify-start"} {...others} />);
}

export default Component;
