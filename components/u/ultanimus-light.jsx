import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s77gngb9u.css';
import '../../css/n/n3-u1ki8e.css';

const viewBox = {"width":18,"height":20,"left":3,"top":2};
const content = `<path class="s77gngb9u"/><circle class="n3-u1ki8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ultanimus-light"} {...others} />);
}

export default Component;
