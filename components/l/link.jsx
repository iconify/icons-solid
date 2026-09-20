import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2m7awbvd.css';
import '../../css/g/ggfvuibun.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b2m7awbvd"/><path class="ggfvuibun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:link"} {...others} />);
}

export default Component;
