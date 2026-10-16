import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzfltwb0i.css';
import '../../css/r/rmhq31bfl.css';
import '../../css/i/iyy4s4bbf.css';
import '../../css/n/n6xqm1b3f.css';

const viewBox = {"width":1024,"height":1024};
const content = `<rect class="yzfltwb0i"/><rect class="rmhq31bfl"/><path class="iyy4s4bbf"/><path class="n6xqm1b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:termix"} {...others} />);
}

export default Component;
