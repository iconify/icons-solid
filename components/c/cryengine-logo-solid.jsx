import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc0llq_tf.css';
import '../../css/l/l12z44bdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zc0llq_tf"/><path clip-rule="evenodd" class="l12z44bdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:cryengine-logo-solid"} {...others} />);
}

export default Component;
