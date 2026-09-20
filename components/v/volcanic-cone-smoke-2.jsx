import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0jky6xpj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w0jky6xpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:volcanic-cone-smoke-2"} {...others} />);
}

export default Component;
