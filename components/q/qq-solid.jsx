import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le_cqibfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="le_cqibfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:qq-solid"} {...others} />);
}

export default Component;
