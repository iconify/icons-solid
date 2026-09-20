import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aerf2dljn.css';
import '../../css/p/p27qq8biq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aerf2dljn"/><path class="p27qq8biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:page-settings"} {...others} />);
}

export default Component;
