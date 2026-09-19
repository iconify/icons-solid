import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_1i2wbog.css';
import '../../css/e/ebk-i5bgy.css';
import '../../css/x/xrrh6ldfr.css';
import '../../css/a/aua1mubtl.css';
import '../../css/x/xf1xh1bme.css';
import '../../css/e/ekfy4t2yo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="v_1i2wbog"/><path class="ebk-i5bgy"/><path class="xrrh6ldfr"/><path class="aua1mubtl"/><path class="xf1xh1bme"/><path class="ekfy4t2yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cake"} {...others} />);
}

export default Component;
