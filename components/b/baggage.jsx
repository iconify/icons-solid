import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b7qisvbhc.css';
import '../../css/z/zkoiumseb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="b7qisvbhc"/><path class="zkoiumseb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:baggage"} {...others} />);
}

export default Component;
