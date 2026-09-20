import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik7l-vbda.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ik7l-vbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gasoline-pump-with-d"} {...others} />);
}

export default Component;
