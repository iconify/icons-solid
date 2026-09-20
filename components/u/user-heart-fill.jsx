import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z58k0jbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z58k0jbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:user-heart-fill"} {...others} />);
}

export default Component;
