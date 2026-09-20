import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6pz_sbdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b6pz_sbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:sort-horizontal"} {...others} />);
}

export default Component;
