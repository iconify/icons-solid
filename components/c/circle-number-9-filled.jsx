import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd81ub8rn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bd81ub8rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-number-9-filled"} {...others} />);
}

export default Component;
