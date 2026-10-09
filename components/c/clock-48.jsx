import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/g/g9csrwbjy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="g9csrwbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-48"} {...others} />);
}

export default Component;
