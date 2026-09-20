import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsx1q7bdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hsx1q7bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:security-safe-filled"} {...others} />);
}

export default Component;
