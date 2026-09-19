import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_9ma5gfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_9ma5gfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:brand-twitter"} {...others} />);
}

export default Component;
