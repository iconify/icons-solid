import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_l8s7bvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t_l8s7bvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:more-square-vert-fill"} {...others} />);
}

export default Component;
