import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3t8n_b1o.css';
import '../../css/j/jit9i0epo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3t8n_b1o"/><path class="jit9i0epo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-zip-filled"} {...others} />);
}

export default Component;
