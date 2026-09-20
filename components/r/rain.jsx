import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyfuw7bce.css';
import '../../css/i/iu0eltnal.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="xyfuw7bce"/><path class="iu0eltnal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:rain"} {...others} />);
}

export default Component;
