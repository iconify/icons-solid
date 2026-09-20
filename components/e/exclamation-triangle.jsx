import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kiljenbns.css';
import '../../css/t/tw45gdb_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="kiljenbns"/><path class="tw45gdb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:exclamation-triangle"} {...others} />);
}

export default Component;
