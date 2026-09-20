import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6l5hbtny.css';
import '../../css/d/daffd7btx.css';
import '../../css/x/xa-ap0bcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r6l5hbtny"/><path class="daffd7btx"/><path class="xa-ap0bcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:bell-electric"} {...others} />);
}

export default Component;
