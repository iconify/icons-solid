import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2uizub6o.css';
import '../../css/h/hi9s2obbi.css';
import '../../css/i/ie-ykwxtd.css';
import '../../css/b/bo570lbnv.css';
import '../../css/l/l55kowkxq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o2uizub6o"/><path class="hi9s2obbi"/><path class="ie-ykwxtd"/><path class="bo570lbnv"/><path class="l55kowkxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:robot-arm-48-bold"} {...others} />);
}

export default Component;
