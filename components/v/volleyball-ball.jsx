import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id5a9xwyg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="id5a9xwyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:volleyball-ball"} {...others} />);
}

export default Component;
