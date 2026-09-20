import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/m/mefbpt.css';
import '../../css/b/bqwbxe.css';
import '../../css/l/ln6moz.css';
import '../../css/s/so-from-54.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-4px.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-pjbx7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c mefbpt"/><circle class="bqwbxe"/><path class="a0m25c ln6moz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:my-location"} {...others} />);
}

export default Component;
