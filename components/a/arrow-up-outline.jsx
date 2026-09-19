import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldmnugbgt.css';
import '../../css/a/aqgm4tbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ldmnugbgt"/><path clip-rule="evenodd" class="aqgm4tbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:arrow-up-outline"} {...others} />);
}

export default Component;
