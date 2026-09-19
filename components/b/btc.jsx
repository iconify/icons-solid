import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfxe2qbrn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hfxe2qbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:btc"} {...others} />);
}

export default Component;
