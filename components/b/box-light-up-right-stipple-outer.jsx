import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmiclo8zs.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="qmiclo8zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-up-right-stipple-outer"} {...others} />);
}

export default Component;
