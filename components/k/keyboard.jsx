import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/artlz7bym.css';
import '../../css/c/c5y_3_b0c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="artlz7bym"/><path class="c5y_3_b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:keyboard"} {...others} />);
}

export default Component;
