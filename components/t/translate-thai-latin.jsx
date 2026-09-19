import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgyph7b6v.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="zgyph7b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:translate-thai-latin"} {...others} />);
}

export default Component;
