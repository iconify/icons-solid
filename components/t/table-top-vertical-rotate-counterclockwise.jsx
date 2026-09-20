import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hienlub7q.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="hienlub7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-vertical-rotate-counterclockwise"} {...others} />);
}

export default Component;
