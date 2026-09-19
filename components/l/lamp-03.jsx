import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzn5g7ntz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzn5g7ntz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp-03"} {...others} />);
}

export default Component;
