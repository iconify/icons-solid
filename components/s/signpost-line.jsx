import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z48zn0bsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z48zn0bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:signpost-line"} {...others} />);
}

export default Component;
