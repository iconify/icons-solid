import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq36g-bic.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xq36g-bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:usergroup-delete"} {...others} />);
}

export default Component;
