import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_yba3x_g.css';
import '../../css/z/zr9odabgf.css';
import '../../css/h/h5_t-db-b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d_yba3x_g"/><path class="zr9odabgf"/><path class="h5_t-db-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:duplicate-16"} {...others} />);
}

export default Component;
