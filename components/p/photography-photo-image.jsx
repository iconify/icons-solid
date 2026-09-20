import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utsk9mbdc.css';
import '../../css/a/a1wz2fbea.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="utsk9mbdc"/><path class="a1wz2fbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:photography-photo-image"} {...others} />);
}

export default Component;
