import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2wv6_umn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="z2wv6_umn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:admin"} {...others} />);
}

export default Component;
