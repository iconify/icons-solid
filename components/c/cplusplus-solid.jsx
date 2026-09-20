import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n004xq-kn.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="n004xq-kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:cplusplus-solid"} {...others} />);
}

export default Component;
