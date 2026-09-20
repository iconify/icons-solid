import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-agpl5uh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r-agpl5uh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:needle-and-spool-of-thread"} {...others} />);
}

export default Component;
