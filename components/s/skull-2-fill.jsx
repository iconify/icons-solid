import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzd_86c9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzd_86c9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:skull-2-fill"} {...others} />);
}

export default Component;
