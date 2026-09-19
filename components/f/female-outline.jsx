import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpm4kob4e.css';
import '../../css/z/zbsn2h2kc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="zpm4kob4e"/><path class="zbsn2h2kc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:female-outline"} {...others} />);
}

export default Component;
