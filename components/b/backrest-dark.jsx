import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql9m-zbdi.css';
import '../../css/c/cpdlicbfk.css';

const viewBox = {"width":1396.28,"height":387.95,"left":272.15,"top":648.13};
const content = `<path class="ql9m-zbdi"/><path class="cpdlicbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:backrest-dark"} {...others} />);
}

export default Component;
