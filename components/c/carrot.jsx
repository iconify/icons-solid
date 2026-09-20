import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m98lz0v9y.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="m98lz0v9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:carrot"} {...others} />);
}

export default Component;
