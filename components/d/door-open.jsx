import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5aho55cg.css';

const viewBox = {"width":1216,"height":2016};
const content = `<path class="h5aho55cg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:door-open"} {...others} />);
}

export default Component;
