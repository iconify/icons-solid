import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu79aub5k.css';
import '../../css/y/y801r3qvz.css';
import '../../css/m/mbfprhq2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xu79aub5k"/><path class="y801r3qvz"/><path clip-rule="evenodd" class="mbfprhq2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-tree-outline"} {...others} />);
}

export default Component;
