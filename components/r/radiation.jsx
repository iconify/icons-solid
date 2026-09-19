import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqchobbzt.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqchobbzt"/><circle class="v4i2ew1ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:radiation"} {...others} />);
}

export default Component;
