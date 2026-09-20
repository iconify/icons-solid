import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxcu8pu1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxcu8pu1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:double-arrow-up"} {...others} />);
}

export default Component;
