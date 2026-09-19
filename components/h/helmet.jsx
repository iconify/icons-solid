import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1m-mr4if.css';
import '../../css/p/pfqm07bad.css';
import '../../css/w/wq3mw5q_z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIkhD9cef"><g class="ft5dv1b6b"><path class="r1m-mr4if"/><path class="pfqm07bad"/><path class="wq3mw5q_z"/></g></mask></defs><path mask="url(#SVGIkhD9cef)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:helmet"} {...others} />);
}

export default Component;
