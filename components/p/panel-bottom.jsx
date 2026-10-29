import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqq7tyroa.css';
import '../../css/q/q062oc2hv.css';
import '../../css/l/lzkadnb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jqq7tyroa"/><path class="q062oc2hv"/><path class="lzkadnb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:panel-bottom"} {...others} />);
}

export default Component;
