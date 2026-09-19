import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shnc5m5hf.css';
import '../../css/c/cn4m4xbfq.css';
import '../../css/a/a1x6v0wfj.css';
import '../../css/a/axagtubtw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="shnc5m5hf"><path class="cn4m4xbfq"/><path class="a1x6v0wfj"/></g><path class="axagtubtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:charge-battery"} {...others} />);
}

export default Component;
