import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhkgv3b3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qhkgv3b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:align-objects-bottom"} {...others} />);
}

export default Component;
