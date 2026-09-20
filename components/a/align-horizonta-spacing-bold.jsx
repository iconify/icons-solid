import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqlxk4byx.css';
import '../../css/g/gxoky2bds.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nqlxk4byx"/><path class="gxoky2bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizonta-spacing-bold"} {...others} />);
}

export default Component;
