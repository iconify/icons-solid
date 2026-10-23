import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq4hckazh.css';
import '../../css/q/q20ydo2qh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tq4hckazh"/><path class="q20ydo2qh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:lamp-desk"} {...others} />);
}

export default Component;
