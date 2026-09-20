import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ycuu2-fmj.css';
import '../../css/r/rxacr7btt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ycuu2-fmj"/><path class="rxacr7btt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:coffee-bean"} {...others} />);
}

export default Component;
