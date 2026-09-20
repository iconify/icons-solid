import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol3a8ccys.css';
import '../../css/o/o_h18ib6j.css';
import '../../css/v/vdow_6bgu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ol3a8ccys"/><path class="o_h18ib6j"/><path class="vdow_6bgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-laptop"} {...others} />);
}

export default Component;
