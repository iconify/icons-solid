import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re3r4xblg.css';
import '../../css/n/nq37i1bls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="re3r4xblg"/><path clip-rule="evenodd" class="nq37i1bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:folder-locked-2-fill"} {...others} />);
}

export default Component;
