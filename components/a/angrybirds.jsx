import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckzu8g9rf.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="ckzu8g9rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:angrybirds"} {...others} />);
}

export default Component;
