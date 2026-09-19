import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd6vyq9rg.css';

const viewBox = {"width":432,"height":384};
const content = `<path class="fd6vyq9rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:dehaze"} {...others} />);
}

export default Component;
