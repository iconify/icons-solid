import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggvn7iwto.css';
import '../../css/x/x5x2_1b7b.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ggvn7iwto"/><path class="x5x2_1b7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openuem-dark"} {...others} />);
}

export default Component;
