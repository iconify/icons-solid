import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gpars9bzu.css';
import '../../css/n/n1-23kb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="gpars9bzu"/><path class="n1-23kb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cabinet-02"} {...others} />);
}

export default Component;
