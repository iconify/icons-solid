import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to2lt32jq.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="to2lt32jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vih"} {...others} />);
}

export default Component;
