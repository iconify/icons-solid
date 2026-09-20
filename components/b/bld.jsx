import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsy1fdcdi.css';
import '../../css/c/cy43ccb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rsy1fdcdi"/><path clip-rule="evenodd" class="cy43ccb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bld"} {...others} />);
}

export default Component;
