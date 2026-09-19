import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dokbrr4ih.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dokbrr4ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:shield-virus"} {...others} />);
}

export default Component;
