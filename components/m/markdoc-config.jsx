import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nis8n537v.css';
import '../../css/s/s-upr6ely.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nis8n537v"/><path class="s-upr6ely"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:markdoc-config"} {...others} />);
}

export default Component;
