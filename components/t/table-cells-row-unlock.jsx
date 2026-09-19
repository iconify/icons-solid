import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1zf47b8j.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="h1zf47b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:table-cells-row-unlock"} {...others} />);
}

export default Component;
