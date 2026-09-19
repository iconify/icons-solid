import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/q/qnx6idjmr.css';
import '../../css/w/wgbgurmsp.css';
import '../../css/h/hgrrm0nzr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkQ0mucVk"><g class="hv130ab-t"><path class="qnx6idjmr"/><path class="wgbgurmsp"/><path class="hgrrm0nzr"/></g></mask></defs><path mask="url(#SVGkQ0mucVk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:prison"} {...others} />);
}

export default Component;
