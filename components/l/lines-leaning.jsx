import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk9y8_tpe.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="pk9y8_tpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:lines-leaning"} {...others} />);
}

export default Component;
