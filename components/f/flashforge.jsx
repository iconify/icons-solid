import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj8hq6oxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cj8hq6oxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:flashforge"} {...others} />);
}

export default Component;
