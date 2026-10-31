import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6mogacyz.css';
import '../../css/r/raky5r2xx.css';
import '../../css/n/n_rsox0pp.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="g6mogacyz"/><path class="raky5r2xx"/><path class="n_rsox0pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:bolivia"} {...others} />);
}

export default Component;
