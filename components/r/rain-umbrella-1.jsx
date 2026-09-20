import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vmekasbbn.css';
import '../../css/n/nn-qepbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="vmekasbbn"/><path class="nn-qepbqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:rain-umbrella-1"} {...others} />);
}

export default Component;
