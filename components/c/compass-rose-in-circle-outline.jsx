import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soayfe2qc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="soayfe2qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:compass-rose-in-circle-outline"} {...others} />);
}

export default Component;
