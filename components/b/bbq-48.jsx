import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw4336b9k.css';
import '../../css/p/phnyk0rqy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tw4336b9k"/><path class="phnyk0rqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bbq-48"} {...others} />);
}

export default Component;
