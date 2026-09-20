import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snw6p3bpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="snw6p3bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:black-hole2-filled"} {...others} />);
}

export default Component;
