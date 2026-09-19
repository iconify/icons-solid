import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxg2urbpi.css';
import '../../css/d/d0fagzbxo.css';
import '../../css/s/s3en1kj6e.css';
import '../../css/v/v385kybwd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pxg2urbpi"/><path class="d0fagzbxo"/><path class="s3en1kj6e"/><path class="v385kybwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:wolfface"} {...others} />);
}

export default Component;
