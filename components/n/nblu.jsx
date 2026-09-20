import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccfj3dt4e.css';
import '../../css/g/gps6u6bmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccfj3dt4e"/><path class="gps6u6bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nblu"} {...others} />);
}

export default Component;
