import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b783a2h0w.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="b783a2h0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:guide-dog2x-outline"} {...others} />);
}

export default Component;
