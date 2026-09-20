import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0pqhea9a.css';
import '../../css/z/zoadec5pq.css';
import '../../css/z/zb2w8cc6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l0pqhea9a"/><path class="zoadec5pq"/><path class="zb2w8cc6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:imgur"} {...others} />);
}

export default Component;
