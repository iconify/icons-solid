import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri4cqjboh.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="ri4cqjboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:settingsandroid"} {...others} />);
}

export default Component;
