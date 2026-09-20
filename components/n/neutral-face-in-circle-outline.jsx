import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqwsjp3fu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fqwsjp3fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:neutral-face-in-circle-outline"} {...others} />);
}

export default Component;
