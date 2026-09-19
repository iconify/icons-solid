import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/so2vopsuu.css';
import '../../css/m/m4l7k4ntf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="so2vopsuu"/><path class="m4l7k4ntf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-duotone"} {...others} />);
}

export default Component;
