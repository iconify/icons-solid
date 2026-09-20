import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9eokvp7t.css';
import '../../css/w/w17inbchm.css';
import '../../css/u/uuguc0g7o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v9eokvp7t"/><path clip-rule="evenodd" class="w17inbchm"/><path class="uuguc0g7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:school-solid"} {...others} />);
}

export default Component;
