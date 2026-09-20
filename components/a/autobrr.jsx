import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl1lzyb4w.css';
import '../../css/r/r6ba24bog.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yl1lzyb4w"/><path class="r6ba24bog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:autobrr"} {...others} />);
}

export default Component;
