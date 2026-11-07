import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2-x-cbeh.css';
import '../../css/q/qykqcq_5w.css';
import '../../css/g/gyjvu3nrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j2-x-cbeh"/><path class="qykqcq_5w"/><path class="gyjvu3nrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-bold-duotone"} {...others} />);
}

export default Component;
