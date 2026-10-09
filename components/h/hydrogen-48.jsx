import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/f/f-vejgbix.css';
import '../../css/w/wkf9r370w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="f-vejgbix"/><path class="wkf9r370w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-48"} {...others} />);
}

export default Component;
