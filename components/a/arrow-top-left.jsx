import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/con_4y89t.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="con_4y89t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:arrow-top-left"} {...others} />);
}

export default Component;
