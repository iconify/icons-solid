import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5t1ojbag.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="x5t1ojbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:nappy-diaper-outline"} {...others} />);
}

export default Component;
