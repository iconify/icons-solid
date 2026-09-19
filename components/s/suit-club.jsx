import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjm8lsc9b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gjm8lsc9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:suit-club"} {...others} />);
}

export default Component;
