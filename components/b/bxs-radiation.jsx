import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em9miyxzj.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="em9miyxzj"/><circle class="v4i2ew1ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-radiation"} {...others} />);
}

export default Component;
