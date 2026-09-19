import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc5thce2f.css';
import '../../css/x/xo1yjrb5w.css';
import '../../css/w/wk9a195np.css';
import '../../css/x/x0qkfr1ft.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="xc5thce2f"/><circle class="xo1yjrb5w"/><circle class="wk9a195np"/><path class="x0qkfr1ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:scatter-matrix"} {...others} />);
}

export default Component;
