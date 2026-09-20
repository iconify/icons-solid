import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkxeucbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path vector-effect="non-scaling-stroke" class="xkxeucbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:align-right"} {...others} />);
}

export default Component;
