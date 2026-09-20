import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkw_-pbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkw_-pbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brightness-filled"} {...others} />);
}

export default Component;
