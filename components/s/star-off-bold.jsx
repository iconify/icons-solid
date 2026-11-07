import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1ax0lebc.css';
import '../../css/n/nyn0a-12z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k1ax0lebc"/><path class="nyn0a-12z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-off-bold"} {...others} />);
}

export default Component;
