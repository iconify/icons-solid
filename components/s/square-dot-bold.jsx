import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klnqmk2mt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="klnqmk2mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-dot-bold"} {...others} />);
}

export default Component;
