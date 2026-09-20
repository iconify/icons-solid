import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4d2hli0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4d2hli0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:toke-square-sharp"} {...others} />);
}

export default Component;
