import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbf2u5b4s.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="sbf2u5b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:grape"} {...others} />);
}

export default Component;
