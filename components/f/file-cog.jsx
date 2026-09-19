import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixwkb7bem.css';
import '../../css/a/aie3xzkwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixwkb7bem"/><path class="aie3xzkwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-cog"} {...others} />);
}

export default Component;
