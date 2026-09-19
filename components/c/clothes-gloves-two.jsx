import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5zb4-b3y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a5zb4-b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-gloves-two"} {...others} />);
}

export default Component;
