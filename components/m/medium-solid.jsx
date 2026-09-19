import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-sk7-3fb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k-sk7-3fb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:medium-solid"} {...others} />);
}

export default Component;
