import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahqll4bmg.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="ahqll4bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bin-solid"} {...others} />);
}

export default Component;
