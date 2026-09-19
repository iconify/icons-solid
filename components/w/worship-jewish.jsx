import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn7trv9jc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rn7trv9jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:worship-jewish"} {...others} />);
}

export default Component;
