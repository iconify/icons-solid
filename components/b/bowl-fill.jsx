import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3l1hd7pz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3l1hd7pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:bowl-fill"} {...others} />);
}

export default Component;
