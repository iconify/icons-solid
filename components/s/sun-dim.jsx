import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/b/bfo7xzj5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="aqhok2bbj"/><path class="bfo7xzj5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sun-dim"} {...others} />);
}

export default Component;
