import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj-7uouhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lj-7uouhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:sunrise-filled"} {...others} />);
}

export default Component;
