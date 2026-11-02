import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm26vc1og.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="sm26vc1og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:gender-trans-20-solid"} {...others} />);
}

export default Component;
