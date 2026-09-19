import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icsu46bas.css';

const viewBox = {"width":192,"height":512};
const content = `<path class="icsu46bas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:grip-lines-vertical"} {...others} />);
}

export default Component;
