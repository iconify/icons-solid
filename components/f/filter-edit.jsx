import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orw8s647j.css';
import '../../css/f/fwvo6n8hv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="orw8s647j"/><path class="fwvo6n8hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:filter-edit"} {...others} />);
}

export default Component;
