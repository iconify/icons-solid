import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/owfbcdrve.css';
import '../../css/x/xacu93d6a.css';
import '../../css/k/kg1skkbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="owfbcdrve"/><path class="xacu93d6a"/><path class="kg1skkbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:saving-bank"} {...others} />);
}

export default Component;
