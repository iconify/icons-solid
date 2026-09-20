import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfv3ot-fd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nfv3ot-fd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:requirements"} {...others} />);
}

export default Component;
