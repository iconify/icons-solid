import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_h0j5bwz.css';
import '../../css/o/o27nl8m4l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m_h0j5bwz"/><path clip-rule="evenodd" class="o27nl8m4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:kubernetes"} {...others} />);
}

export default Component;
