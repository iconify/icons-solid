import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-sjs80hz.css';
import '../../css/y/yg4ntub0x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e-sjs80hz"/><circle class="yg4ntub0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:livinity-light"} {...others} />);
}

export default Component;
