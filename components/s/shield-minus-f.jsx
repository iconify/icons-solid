import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emt7v4xbc.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};
const content = `<path class="emt7v4xbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:shield-minus-f"} {...others} />);
}

export default Component;
