import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke5p3ibmy.css';
import '../../css/w/w25cgwhtz.css';

const viewBox = {"width":718.797,"height":401.847};
const content = `<path class="ke5p3ibmy"/><path class="w25cgwhtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:btk"} {...others} />);
}

export default Component;
