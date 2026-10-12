import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d16mu3fsh.css';
import '../../css/e/et91ikbvq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d16mu3fsh"/><path class="et91ikbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pill-48-bold"} {...others} />);
}

export default Component;
