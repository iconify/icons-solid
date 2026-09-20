import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inx9gng5o.css';
import '../../css/w/wrhz-zbad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="inx9gng5o"/><path class="wrhz-zbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:load-circle-fill"} {...others} />);
}

export default Component;
