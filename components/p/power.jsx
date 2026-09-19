import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei4r2welx.css';
import '../../css/n/nt_i2cb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ei4r2welx"/><path class="nt_i2cb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:power"} {...others} />);
}

export default Component;
