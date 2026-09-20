import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_vulybfi.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="w_vulybfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:line-arrow-crossover-right-remix"} {...others} />);
}

export default Component;
