import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5m6s7ndc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d5m6s7ndc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:fountain-toret"} {...others} />);
}

export default Component;
