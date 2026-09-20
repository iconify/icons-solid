import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qloeeh4pd.css';
import '../../css/z/zqc9e19xs.css';
import '../../css/b/bqr110b0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="qloeeh4pd"><path class="zqc9e19xs"/><path class="bqr110b0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:one-handed-holding-tablet-handheld"} {...others} />);
}

export default Component;
