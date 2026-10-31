import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7x-4e4hm.css';
import '../../css/x/x_t76jq2h.css';
import '../../css/f/fhw0kygnc.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="u7x-4e4hm"/><path class="x_t76jq2h"/><path class="fhw0kygnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:republic-congo"} {...others} />);
}

export default Component;
