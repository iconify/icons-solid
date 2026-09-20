import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmtvy7mvf.css';
import '../../css/l/l-3p4vbvz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fmtvy7mvf"/><path class="l-3p4vbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:search-user"} {...others} />);
}

export default Component;
