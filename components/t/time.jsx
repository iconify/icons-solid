import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igo_o-d5w.css';
import '../../css/d/dnmne6b8u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="igo_o-d5w"/><path class="dnmne6b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:time"} {...others} />);
}

export default Component;
