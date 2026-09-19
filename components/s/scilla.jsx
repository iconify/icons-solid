import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2mf5ebrq.css';
import '../../css/o/o_3md2c4n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g2mf5ebrq"/><path class="o_3md2c4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:scilla"} {...others} />);
}

export default Component;
