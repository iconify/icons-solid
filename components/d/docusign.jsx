import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttkhi0bup.css';
import '../../css/f/f0dax9b3f.css';
import '../../css/o/otkwx3beg.css';
import '../../css/v/vwxy9pbbd.css';

const viewBox = {"width":1200,"height":241.4};
const content = `<path class="ttkhi0bup"/><path class="f0dax9b3f"/><path class="otkwx3beg"/><path class="vwxy9pbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:docusign"} {...others} />);
}

export default Component;
