import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui57otb5r.css';
import '../../css/d/dpovio02y.css';
import '../../css/u/uaipmab5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ui57otb5r"/><path clip-rule="evenodd" class="dpovio02y"/><path class="uaipmab5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-happly-outline"} {...others} />);
}

export default Component;
