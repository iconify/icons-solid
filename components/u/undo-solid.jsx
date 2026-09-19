import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/a1lbtofvp.css';
import '../../css/a/aos5h-flq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="a1lbtofvp"/><path class="aos5h-flq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:undo-solid"} {...others} />);
}

export default Component;
