import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7e5-73sx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z7e5-73sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:adjustments-minus"} {...others} />);
}

export default Component;
