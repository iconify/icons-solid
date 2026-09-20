import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5q3lq8lz.css';
import '../../css/o/or-r2ccaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5q3lq8lz"/><path clip-rule="evenodd" class="or-r2ccaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:spam-24"} {...others} />);
}

export default Component;
