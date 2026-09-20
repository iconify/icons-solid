import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcz9gmb8w.css';
import '../../css/v/vi3jb3b5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wcz9gmb8w"/><path class="vi3jb3b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lunalytics"} {...others} />);
}

export default Component;
