import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltfo6yaen.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};
const content = `<path class="ltfo6yaen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:bookmark-remove"} {...others} />);
}

export default Component;
