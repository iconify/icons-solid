import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5xv1ob9c.css';
import '../../css/t/tr-eedcjf.css';
import '../../css/b/bewutf38v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n5xv1ob9c"/><path class="tr-eedcjf"/><path class="bewutf38v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:igloo-48-bold"} {...others} />);
}

export default Component;
