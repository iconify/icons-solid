import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igin2l9yo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="igin2l9yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ad-circle-line"} {...others} />);
}

export default Component;
