import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uig_arbat.css';
import '../../css/p/p-744obuk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uig_arbat"/><path class="p-744obuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:setting-line-duotone-line"} {...others} />);
}

export default Component;
