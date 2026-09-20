import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydcy8zb4e.css';
import '../../css/u/uq2o6vb1m.css';
import '../../css/j/jhz-ysexk.css';
import '../../css/e/e8fm-qebd.css';
import '../../css/u/uvlxmebqa.css';
import '../../css/f/fnvbkcg9t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ydcy8zb4e"/><path class="uq2o6vb1m"/><path class="jhz-ysexk"/><path class="e8fm-qebd"/><path class="uvlxmebqa"/><path class="fnvbkcg9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:solarassistant-dark"} {...others} />);
}

export default Component;
