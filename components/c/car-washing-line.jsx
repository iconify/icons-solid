import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti7rj0bex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti7rj0bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:car-washing-line"} {...others} />);
}

export default Component;
