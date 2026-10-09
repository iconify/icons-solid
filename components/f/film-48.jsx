import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htetqt6dv.css';
import '../../css/z/zh18k_bxi.css';
import '../../css/h/heyzer6mv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="htetqt6dv"/><path class="zh18k_bxi"/><path class="heyzer6mv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:film-48"} {...others} />);
}

export default Component;
