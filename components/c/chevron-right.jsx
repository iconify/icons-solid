import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doip9tbcr.css';

const viewBox = {"width":24,"height":24,"left":-8,"top":-5};
const content = `<path class="doip9tbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevron-right"} {...others} />);
}

export default Component;
