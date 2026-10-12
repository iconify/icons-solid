import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iccsyvk3j.css';
import '../../css/o/otxs-bbsk.css';
import '../../css/k/kbn91fbuc.css';
import '../../css/y/ymlf35b1k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iccsyvk3j"/><path class="otxs-bbsk"/><path class="kbn91fbuc"/><path class="ymlf35b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:prescription-20-bold"} {...others} />);
}

export default Component;
