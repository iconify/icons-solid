import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzcac-btc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hzcac-btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:box-2"} {...others} />);
}

export default Component;
