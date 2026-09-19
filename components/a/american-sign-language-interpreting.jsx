import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo3513bri.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="eo3513bri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:american-sign-language-interpreting"} {...others} />);
}

export default Component;
