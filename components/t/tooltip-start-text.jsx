import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aem1l6blz.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="aem1l6blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tooltip-start-text"} {...others} />);
}

export default Component;
