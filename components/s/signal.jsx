import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjo5syb6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjo5syb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:signal"} {...others} />);
}

export default Component;
