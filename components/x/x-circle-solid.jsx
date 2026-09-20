import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4q-tzb2p.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="o4q-tzb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:x-circle-solid"} {...others} />);
}

export default Component;
