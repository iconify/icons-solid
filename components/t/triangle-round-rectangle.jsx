import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9rz2pk3b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m9rz2pk3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:triangle-round-rectangle"} {...others} />);
}

export default Component;
