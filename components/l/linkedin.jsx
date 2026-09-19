import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu1u67bmt.css';

const viewBox = {"width":750,"height":850};
const content = `<path class="eu1u67bmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:linkedin"} {...others} />);
}

export default Component;
