import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uukcbebvz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uukcbebvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pyramid-shape-solid"} {...others} />);
}

export default Component;
