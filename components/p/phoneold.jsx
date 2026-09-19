import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2f-5pork.css';

const viewBox = {"width":1024,"height":960};
const content = `<path class="h2f-5pork"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:phoneold"} {...others} />);
}

export default Component;
