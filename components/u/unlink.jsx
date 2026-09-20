import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5yxrcd3b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="l5yxrcd3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:unlink"} {...others} />);
}

export default Component;
