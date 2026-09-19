import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s08vpub8u.css';
import '../../css/o/ojv2arocj.css';
import '../../css/m/mq5xx16sw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBi8LkdFe"><g class="ft5dv1b6b"><rect class="s08vpub8u"/><path class="ojv2arocj"/><rect transform="rotate(90 15 29)" class="mq5xx16sw"/></g></mask></defs><path mask="url(#SVGBi8LkdFe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:painted-screen"} {...others} />);
}

export default Component;
