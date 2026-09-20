import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fogjkc5eq.css';
import '../../css/z/zwaobpb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fogjkc5eq"/><path clip-rule="evenodd" class="zwaobpb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-monitor-fill"} {...others} />);
}

export default Component;
