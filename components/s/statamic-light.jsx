import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn0z7abwo.css';
import '../../css/v/vi98df-3j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yn0z7abwo"/><path class="vi98df-3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:statamic-light"} {...others} />);
}

export default Component;
