import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxh0f2bbu.css';
import '../../css/r/rqmkcsbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oxh0f2bbu"/><path class="rqmkcsbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:upload-light"} {...others} />);
}

export default Component;
