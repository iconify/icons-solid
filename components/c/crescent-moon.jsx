import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqnsdnbcn.css';
import '../../css/n/n47uc4bkd.css';
import '../../css/u/ukoujx6ly.css';
import '../../css/y/y1ar7-bhy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dqnsdnbcn"/><path class="n47uc4bkd"/><path class="ukoujx6ly"/><path class="y1ar7-bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:crescent-moon"} {...others} />);
}

export default Component;
