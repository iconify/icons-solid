import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si5ky56_s.css';
import '../../css/w/w-1mownrb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="si5ky56_s"/><path class="w-1mownrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:blood-test"} {...others} />);
}

export default Component;
