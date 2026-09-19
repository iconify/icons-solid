import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd_x95izh.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="cd_x95izh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:intersectshape"} {...others} />);
}

export default Component;
