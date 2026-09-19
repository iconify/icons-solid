import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2ljqbzto.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="r2ljqbzto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:space-tool"} {...others} />);
}

export default Component;
