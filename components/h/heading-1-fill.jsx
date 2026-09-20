import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra9ry8b0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ra9ry8b0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:heading-1-fill"} {...others} />);
}

export default Component;
