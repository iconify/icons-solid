import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8ooa6h5z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v8ooa6h5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:box-truck"} {...others} />);
}

export default Component;
