import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp9_jbb1j.css';
import '../../css/p/pnjqzgbmt.css';
import '../../css/h/hlqjywb0f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wp9_jbb1j"/><path class="pnjqzgbmt"/><path class="hlqjywb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-artboard-shapes"} {...others} />);
}

export default Component;
