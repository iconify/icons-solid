import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2xkvt2tm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h2xkvt2tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:dice-5-fill"} {...others} />);
}

export default Component;
