import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/y/y0r_bqb0y.css';
import '../../css/o/o5-x4v1kf.css';
import '../../css/a/an__txbhx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8SGIZgAX"><g class="hv130ab-t"><rect class="y0r_bqb0y"/><path class="o5-x4v1kf"/><path class="an__txbhx"/></g></mask></defs><path mask="url(#SVG8SGIZgAX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:agreement"} {...others} />);
}

export default Component;
