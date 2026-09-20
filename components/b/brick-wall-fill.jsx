import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/palu_ab3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="palu_ab3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:brick-wall-fill"} {...others} />);
}

export default Component;
