import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk_6gseuv.css';
import '../../css/j/jtop0ctzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qk_6gseuv"/><path class="jtop0ctzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:user-headset-solid"} {...others} />);
}

export default Component;
