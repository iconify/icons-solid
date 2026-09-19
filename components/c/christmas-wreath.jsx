import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkjw91b3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkjw91b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:christmas-wreath"} {...others} />);
}

export default Component;
