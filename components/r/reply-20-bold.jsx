import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isdsq57jo.css';
import '../../css/g/gjhoxrmlt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="isdsq57jo"/><path class="gjhoxrmlt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reply-20-bold"} {...others} />);
}

export default Component;
