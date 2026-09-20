import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph7wbnb1k.css';
import '../../css/o/oxriyzb9j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ph7wbnb1k"/><path class="oxriyzb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:school-science-graduation-cap"} {...others} />);
}

export default Component;
