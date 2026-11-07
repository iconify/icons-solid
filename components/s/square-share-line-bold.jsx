import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldr9qjosp.css';
import '../../css/p/pdyp1acvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ldr9qjosp"/><path clip-rule="evenodd" class="pdyp1acvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-share-line-bold"} {...others} />);
}

export default Component;
