import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3r9tub9u.css';
import '../../css/k/k78qywbzi.css';
import '../../css/d/dp-xfwbez.css';
import '../../css/d/dh01pubcj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="a3r9tub9u"/><path class="k78qywbzi"/><path class="dp-xfwbez"/><path class="dh01pubcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:rqlite"} {...others} />);
}

export default Component;
