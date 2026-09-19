import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4i2ew1ke.css';
import '../../css/d/dlc29abjm.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="v4i2ew1ke"/><path class="dlc29abjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:target-lock"} {...others} />);
}

export default Component;
