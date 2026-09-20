import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpa7jw4ha.css';
import '../../css/e/eomqvxbku.css';
import '../../css/e/elr3i2bjd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hpa7jw4ha"/><path class="eomqvxbku"/><path class="elr3i2bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ui-design-website"} {...others} />);
}

export default Component;
