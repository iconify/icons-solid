import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzbwtpvzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qzbwtpvzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-33-small"} {...others} />);
}

export default Component;
