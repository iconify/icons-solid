import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v62_-3b9x.css';
import '../../css/n/nwfaqcbac.css';
import '../../css/e/ez0pggbas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v62_-3b9x"/><path class="nwfaqcbac"/><path class="ez0pggbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-bullseye"} {...others} />);
}

export default Component;
