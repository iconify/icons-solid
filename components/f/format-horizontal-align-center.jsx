import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6mu9gbof.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="p6mu9gbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:format-horizontal-align-center"} {...others} />);
}

export default Component;
