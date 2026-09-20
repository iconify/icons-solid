import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypy0npbna.css';
import '../../css/g/g0uat02ht.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ypy0npbna"/><path class="g0uat02ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:karatelabs"} {...others} />);
}

export default Component;
