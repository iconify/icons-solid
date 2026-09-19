import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf6dpzmng.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="bf6dpzmng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:building-2"} {...others} />);
}

export default Component;
