import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai5_8yjej.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="ai5_8yjej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:quora"} {...others} />);
}

export default Component;
