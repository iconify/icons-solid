import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj4y_q__z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nj4y_q__z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sobbing-face"} {...others} />);
}

export default Component;
