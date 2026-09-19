import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpp8mpb8p.css';
import '../../css/r/rg45w14ll.css';
import '../../css/v/vi504dbkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wpp8mpb8p"/><path class="rg45w14ll"/><path class="vi504dbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:fingerprint"} {...others} />);
}

export default Component;
