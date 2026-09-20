import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7rz5mx2k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r7rz5mx2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cupcake-with-cherry"} {...others} />);
}

export default Component;
