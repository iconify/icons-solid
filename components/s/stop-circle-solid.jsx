import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm7b_gbkd.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="sm7b_gbkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:stop-circle-solid"} {...others} />);
}

export default Component;
