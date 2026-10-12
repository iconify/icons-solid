import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q28y73oat.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q28y73oat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:accessibility-fill-20"} {...others} />);
}

export default Component;
