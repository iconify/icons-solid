import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmw_nynco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pmw_nynco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:airplane-filled"} {...others} />);
}

export default Component;
