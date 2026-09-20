import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7_0c7bxs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h7_0c7bxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:eye-dotted"} {...others} />);
}

export default Component;
