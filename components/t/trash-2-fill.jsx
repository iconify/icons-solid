import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0fisvldu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0fisvldu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:trash-2-fill"} {...others} />);
}

export default Component;
