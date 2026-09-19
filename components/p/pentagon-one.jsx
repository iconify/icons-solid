import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgh0_tp3p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hgh0_tp3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pentagon-one"} {...others} />);
}

export default Component;
