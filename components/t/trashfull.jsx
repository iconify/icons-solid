import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufp99g8_h.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="ufp99g8_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:trashfull"} {...others} />);
}

export default Component;
