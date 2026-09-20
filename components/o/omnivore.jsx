import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fje0ntbbb.css';
import '../../css/z/zjmdfw3ya.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="fje0ntbbb"/><path class="zjmdfw3ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:omnivore"} {...others} />);
}

export default Component;
