import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7ze_xbnd.css';
import '../../css/n/n1zl3pa7m.css';
import '../../css/c/c84vldf2p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c7ze_xbnd"/><path class="n1zl3pa7m"/><path class="c84vldf2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ccx"} {...others} />);
}

export default Component;
