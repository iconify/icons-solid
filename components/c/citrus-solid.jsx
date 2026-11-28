import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-ezt7pyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-ezt7pyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:citrus-solid"} {...others} />);
}

export default Component;
