import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/baduyu46m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="baduyu46m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:model-context-protocol"} {...others} />);
}

export default Component;
