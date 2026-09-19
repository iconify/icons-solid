import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9-ohxbke.css';
import '../../css/e/ehyq6ihjz.css';
import '../../css/q/qzrhlkbto.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="x9-ohxbke"/><circle class="ehyq6ihjz"/><path class="qzrhlkbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cart"} {...others} />);
}

export default Component;
