import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie6mjcplv.css';
import '../../css/v/v_suxqb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ie6mjcplv"/><path class="v_suxqb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:coffee-bean"} {...others} />);
}

export default Component;
