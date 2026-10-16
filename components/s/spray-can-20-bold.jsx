import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/siwllabzz.css';
import '../../css/n/no61rhzxq.css';
import '../../css/g/gnzoq5b8p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="siwllabzz"/><path class="no61rhzxq"/><path class="gnzoq5b8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spray-can-20-bold"} {...others} />);
}

export default Component;
