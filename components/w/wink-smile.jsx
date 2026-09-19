import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s00y7mbtg.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/t/tk43u5bzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s00y7mbtg"/><path class="bwibdw4bb"/><path class="tk43u5bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wink-smile"} {...others} />);
}

export default Component;
