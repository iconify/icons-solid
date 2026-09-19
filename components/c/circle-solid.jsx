import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo0c_kb7l.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="mo0c_kb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:circle-solid"} {...others} />);
}

export default Component;
