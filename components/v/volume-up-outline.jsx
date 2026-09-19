import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mit5m27lp.css';
import '../../css/g/gv9g0dbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mit5m27lp"/><path class="gv9g0dbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:volume-up-outline"} {...others} />);
}

export default Component;
