import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o81h3dbhb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o81h3dbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wolf-head-and-exclamation-point"} {...others} />);
}

export default Component;
