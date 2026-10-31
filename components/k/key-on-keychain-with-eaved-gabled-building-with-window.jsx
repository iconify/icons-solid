import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek7rwjbyj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ek7rwjbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:key-on-keychain-with-eaved-gabled-building-with-window"} {...others} />);
}

export default Component;
