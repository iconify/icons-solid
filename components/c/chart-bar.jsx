import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzt9c_6gx.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="lzt9c_6gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:chart-bar"} {...others} />);
}

export default Component;
