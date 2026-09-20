import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyb2-dbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uyb2-dbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:monitor-download"} {...others} />);
}

export default Component;
