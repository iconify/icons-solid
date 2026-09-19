import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy1re-qcg.css';
import '../../css/l/lodosdbdi.css';

const viewBox = {"width":16,"height":16};
const content = `<ellipse class="qy1re-qcg"/><circle class="lodosdbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:decimal-stroke-16"} {...others} />);
}

export default Component;
