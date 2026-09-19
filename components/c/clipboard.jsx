import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtv-ejb0q.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="jtv-ejb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:clipboard"} {...others} />);
}

export default Component;
