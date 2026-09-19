import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq7r5obcw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tq7r5obcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-long-up-solid"} {...others} />);
}

export default Component;
