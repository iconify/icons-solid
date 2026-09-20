import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut988i6ey.css';
import '../../css/b/bvhpy4bga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ut988i6ey"/><path class="bvhpy4bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-ie"} {...others} />);
}

export default Component;
