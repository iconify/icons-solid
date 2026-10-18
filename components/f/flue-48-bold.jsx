import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jikxxnb7a.css';
import '../../css/r/r_d_ijm8a.css';
import '../../css/d/d8xz_bcrj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jikxxnb7a"/><path class="r_d_ijm8a"/><path class="d8xz_bcrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flue-48-bold"} {...others} />);
}

export default Component;
