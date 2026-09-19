import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4vl4e8qk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4vl4e8qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:glasses-filled"} {...others} />);
}

export default Component;
