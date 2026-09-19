import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehc2xkc2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehc2xkc2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:directtv"} {...others} />);
}

export default Component;
