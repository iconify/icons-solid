import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9cmwo62a.css';
import '../../css/s/si1_fnblv.css';
import '../../css/h/hxfqr2z6d.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="v9cmwo62a"/><path class="si1_fnblv"/><path class="hxfqr2z6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:image"} {...others} />);
}

export default Component;
