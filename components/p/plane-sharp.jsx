import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-6ekh5os.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x-6ekh5os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:plane-sharp"} {...others} />);
}

export default Component;
