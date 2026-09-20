import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib0anh-7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ib0anh-7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:xbox-x-filled"} {...others} />);
}

export default Component;
