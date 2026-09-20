import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wgyuk90eh.css';
import '../../css/b/bpl4tpbbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wgyuk90eh"/><path class="bpl4tpbbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chess-queen"} {...others} />);
}

export default Component;
