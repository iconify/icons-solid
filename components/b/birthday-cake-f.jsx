import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgp1bebal.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1};
const content = `<path class="rgp1bebal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:birthday-cake-f"} {...others} />);
}

export default Component;
