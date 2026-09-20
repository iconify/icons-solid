import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg49_ubgr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fg49_ubgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:tennis-15"} {...others} />);
}

export default Component;
