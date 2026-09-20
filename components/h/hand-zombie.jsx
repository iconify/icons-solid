import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pscsd7cnf.css';
import '../../css/n/nhf2ek9tk.css';
import '../../css/o/otvh6hb-j.css';
import '../../css/w/w0fjcgbpq.css';
import '../../css/r/r5n5-lbvb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pscsd7cnf"/><path class="nhf2ek9tk"/><path class="otvh6hb-j"/><path class="w0fjcgbpq"/><path class="r5n5-lbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-zombie"} {...others} />);
}

export default Component;
