import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw7p0cfwb.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="dw7p0cfwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:remove-circle"} {...others} />);
}

export default Component;
