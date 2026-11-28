import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anu_i_-lk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="anu_i_-lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:utility-valve-beside-sewage-pipe-cross-section"} {...others} />);
}

export default Component;
