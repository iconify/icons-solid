import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u21m0sbql.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};
const content = `<path class="u21m0sbql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:pencil"} {...others} />);
}

export default Component;
