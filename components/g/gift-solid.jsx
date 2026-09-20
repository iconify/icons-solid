import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0xf62b4y.css';
import '../../css/e/e5i6xxbmr.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="e0xf62b4y"/><path class="e5i6xxbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:gift-solid"} {...others} />);
}

export default Component;
