import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd11hok7e.css';
import '../../css/r/rw7vibdxe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dd11hok7e"/><path class="rw7vibdxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:shoe-15"} {...others} />);
}

export default Component;
