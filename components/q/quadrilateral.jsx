import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5s5r9buo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m5s5r9buo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:quadrilateral"} {...others} />);
}

export default Component;
