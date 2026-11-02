import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2mpj1aue.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r2mpj1aue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:horse-under-gabled-roof"} {...others} />);
}

export default Component;
