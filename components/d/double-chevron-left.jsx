import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajqbr35kz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ajqbr35kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:double-chevron-left"} {...others} />);
}

export default Component;
