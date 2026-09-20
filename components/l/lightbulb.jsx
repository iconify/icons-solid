import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta7e7h-iw.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ta7e7h-iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:lightbulb"} {...others} />);
}

export default Component;
