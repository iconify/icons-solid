import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miifqw2bi.css';

const viewBox = {"width":1536,"height":1664};
const content = `<path class="miifqw2bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:chair-alt"} {...others} />);
}

export default Component;
