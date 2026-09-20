import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sarm1qkki.css';
import '../../css/g/gz4_sebnl.css';
import '../../css/o/ow8eqgmdm.css';
import '../../css/u/uk0szwb3y.css';
import '../../css/c/cs1lv4e5x.css';
import '../../css/o/oxvo-xb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sarm1qkki"/><path clip-rule="evenodd" class="gz4_sebnl"/><path class="ow8eqgmdm"/><path class="uk0szwb3y"/><path clip-rule="evenodd" class="cs1lv4e5x"/><path clip-rule="evenodd" class="oxvo-xb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:network-monitor-hierarchy"} {...others} />);
}

export default Component;
