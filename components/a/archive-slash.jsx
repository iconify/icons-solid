import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl1gwh6zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl1gwh6zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:archive-slash"} {...others} />);
}

export default Component;
