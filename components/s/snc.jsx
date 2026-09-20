import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1xiv5qtn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1xiv5qtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:snc"} {...others} />);
}

export default Component;
