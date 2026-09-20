import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pye6s3a0e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pye6s3a0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:size-width"} {...others} />);
}

export default Component;
