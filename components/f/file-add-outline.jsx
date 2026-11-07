import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu85f6s0m.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uu85f6s0m"/><path clip-rule="evenodd" class="d25mwn3tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-add-outline"} {...others} />);
}

export default Component;
