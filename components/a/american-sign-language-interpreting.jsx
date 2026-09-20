import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk7fr0_yu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yk7fr0_yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:american-sign-language-interpreting"} {...others} />);
}

export default Component;
