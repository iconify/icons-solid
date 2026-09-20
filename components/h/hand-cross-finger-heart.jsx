import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxwy_hw-x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oxwy_hw-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-cross-finger-heart"} {...others} />);
}

export default Component;
