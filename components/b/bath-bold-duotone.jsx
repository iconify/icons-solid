import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0ejorlzz.css';
import '../../css/f/fwrzlbcrn.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lvkw2cbml.css';
import '../../css/f/f2qfvf6at.css';
import '../../css/o/oi1cgjbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0ejorlzz"/><path class="fwrzlbcrn"/><g class="xtpeb-edw"><path class="lvkw2cbml"/><path class="f2qfvf6at"/><path class="oi1cgjbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bath-bold-duotone"} {...others} />);
}

export default Component;
