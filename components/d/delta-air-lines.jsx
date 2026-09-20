import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lydqgnbpm.css';
import '../../css/a/a4bwvchjc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lydqgnbpm"/><path class="a4bwvchjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:delta-air-lines"} {...others} />);
}

export default Component;
