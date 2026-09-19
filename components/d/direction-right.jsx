import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdmfj3y-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdmfj3y-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:direction-right"} {...others} />);
}

export default Component;
