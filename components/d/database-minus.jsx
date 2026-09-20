import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zayw3dbwf.css';
import '../../css/t/tg_riobvo.css';
import '../../css/t/tj6aivbzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zayw3dbwf"/><path class="tg_riobvo"/><ellipse class="tj6aivbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:database-minus"} {...others} />);
}

export default Component;
