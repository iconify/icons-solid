import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atyg_au2t.css';
import '../../css/p/pf0hmharv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atyg_au2t"/><path class="pf0hmharv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-vuejs"} {...others} />);
}

export default Component;
