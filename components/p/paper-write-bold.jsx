import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw5u4miyi.css';
import '../../css/b/b2dxt0bxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aw5u4miyi"/><path class="b2dxt0bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:paper-write-bold"} {...others} />);
}

export default Component;
