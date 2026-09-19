import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-sj49_df.css';
import '../../css/q/q0fujjtaq.css';
import '../../css/v/vv91xn5zq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNKbMldte"><g class="ft5dv1b6b"><path class="b-sj49_df"/><path class="q0fujjtaq"/><path class="vv91xn5zq"/></g></mask></defs><path mask="url(#SVGNKbMldte)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:battery-working"} {...others} />);
}

export default Component;
