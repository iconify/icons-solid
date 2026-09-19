import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/toxq-5b4p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="toxq-5b4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-right-solid"} {...others} />);
}

export default Component;
