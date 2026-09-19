import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-mgk2ajy.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="y-mgk2ajy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mobile-1-bold"} {...others} />);
}

export default Component;
