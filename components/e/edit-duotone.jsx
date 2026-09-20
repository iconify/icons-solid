import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfp4bcqla.css';
import '../../css/v/viclgbp1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfp4bcqla"/><path class="viclgbp1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:edit-duotone"} {...others} />);
}

export default Component;
