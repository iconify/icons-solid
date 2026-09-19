import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7-5t4bnl.css';
import '../../css/h/hgamat_lc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q7-5t4bnl"/><path class="hgamat_lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:connection-two-way"} {...others} />);
}

export default Component;
