import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3m0v5bbq.css';
import '../../css/l/l4ea3-bds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3m0v5bbq duoicon-secondary-layer"/><path class="duoicon-primary-layer l4ea3-bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:camera"} {...others} />);
}

export default Component;
