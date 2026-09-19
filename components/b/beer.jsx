import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oco-8fb8g.css';
import '../../css/t/tk-rzp94k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oco-8fb8g"/><path class="tk-rzp94k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:beer"} {...others} />);
}

export default Component;
