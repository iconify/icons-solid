import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5h0cfbmd.css';
import '../../css/n/n3pz-6bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f5h0cfbmd"/><path class="n3pz-6bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-up-minimalistic-bold"} {...others} />);
}

export default Component;
