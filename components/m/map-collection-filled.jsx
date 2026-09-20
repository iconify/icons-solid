import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j25hdxidg.css';
import '../../css/e/esl7uqcwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j25hdxidg"/><path class="esl7uqcwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-collection-filled"} {...others} />);
}

export default Component;
