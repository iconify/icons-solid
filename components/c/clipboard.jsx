import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlgp2b63v.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="mlgp2b63v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:clipboard"} {...others} />);
}

export default Component;
