import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zifxdrbtd.css';
import '../../css/t/tbr-k1iil.css';
import '../../css/l/lz56vjbyd.css';
import '../../css/p/pzi5q3boi.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="zifxdrbtd"/><path class="tbr-k1iil"/><path class="lz56vjbyd"/><path class="pzi5q3boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:tonga"} {...others} />);
}

export default Component;
