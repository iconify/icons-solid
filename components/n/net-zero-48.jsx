import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/x/x7aj4qb4r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="x7aj4qb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:net-zero-48"} {...others} />);
}

export default Component;
