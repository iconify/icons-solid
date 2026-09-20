import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v35r45b_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v35r45b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:body-shape2-duotone"} {...others} />);
}

export default Component;
