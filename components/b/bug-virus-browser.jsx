import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umiyufmzm.css';
import '../../css/e/ec61k5bos.css';
import '../../css/r/rf-oiacrx.css';
import '../../css/p/pqpmhlj9m.css';
import '../../css/g/g-qnrhopb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="umiyufmzm"/><path clip-rule="evenodd" class="ec61k5bos"/><path class="rf-oiacrx"/><path class="pqpmhlj9m"/><path class="g-qnrhopb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bug-virus-browser"} {...others} />);
}

export default Component;
