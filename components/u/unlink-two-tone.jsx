import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tetnah5za.css';
import '../../css/a/av68ewb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tetnah5za"/><path class="av68ewb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:unlink-two-tone"} {...others} />);
}

export default Component;
