import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiuqq6-6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiuqq6-6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:chevron-right"} {...others} />);
}

export default Component;
