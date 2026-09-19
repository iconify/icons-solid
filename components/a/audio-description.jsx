import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9uzr8bxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9uzr8bxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:audio-description"} {...others} />);
}

export default Component;
