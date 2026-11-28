import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w44k3_byo.css';
import '../../css/d/di2c6dxli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w44k3_byo"/><path class="di2c6dxli primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:explosion-duo"} {...others} />);
}

export default Component;
