import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4c2y4bdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4c2y4bdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:question-circle-solid"} {...others} />);
}

export default Component;
