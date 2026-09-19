import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x7ftiv9rj.css';
import '../../css/e/e2q8iacln.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="x7ftiv9rj"/><path class="e2q8iacln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-wash"} {...others} />);
}

export default Component;
