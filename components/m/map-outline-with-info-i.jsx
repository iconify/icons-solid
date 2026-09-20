import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdxfm_-fk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bdxfm_-fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:map-outline-with-info-i"} {...others} />);
}

export default Component;
