import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtus33btr.css';
import '../../css/z/zeit0ibdm.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="qtus33btr"/><path class="zeit0ibdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pinepods"} {...others} />);
}

export default Component;
