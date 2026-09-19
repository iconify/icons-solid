import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6ppj1_bt.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="w6ppj1_bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:provider-fst-outline"} {...others} />);
}

export default Component;
