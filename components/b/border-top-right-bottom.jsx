import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkte9o6es.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="rkte9o6es"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:border-top-right-bottom"} {...others} />);
}

export default Component;
