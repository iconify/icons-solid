import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vepjdob9n.css';
import '../../css/w/wc49swbmj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><path class="vepjdob9n"/><circle class="wc49swbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:photo"} {...others} />);
}

export default Component;
