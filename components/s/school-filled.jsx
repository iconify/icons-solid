import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my_0eb8dc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="my_0eb8dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:school-filled"} {...others} />);
}

export default Component;
