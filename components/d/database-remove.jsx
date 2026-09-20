import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fhx0xbbhi.css';
import '../../css/r/r6n6ccbxo.css';
import '../../css/s/s7_t1ab2c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fhx0xbbhi"/><path class="r6n6ccbxo"/><path class="s7_t1ab2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-remove"} {...others} />);
}

export default Component;
