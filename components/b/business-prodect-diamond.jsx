import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5p02fbjy.css';
import '../../css/p/p_qjcl89l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a5p02fbjy"/><path class="p_qjcl89l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-prodect-diamond"} {...others} />);
}

export default Component;
