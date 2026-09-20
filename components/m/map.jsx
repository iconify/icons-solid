import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuukbzbho.css';
import '../../css/x/xw75jrbbi.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vuukbzbho"/><path class="xw75jrbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:map"} {...others} />);
}

export default Component;
