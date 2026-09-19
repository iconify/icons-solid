import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7okwmq5a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="l7okwmq5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:tumour"} {...others} />);
}

export default Component;
