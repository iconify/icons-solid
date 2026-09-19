import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6qsnzvxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e6qsnzvxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:text-letter-spacing"} {...others} />);
}

export default Component;
