import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la-8--b9n.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="la-8--b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:plus-circle-fill"} {...others} />);
}

export default Component;
