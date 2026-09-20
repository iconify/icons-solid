import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7v_mpb_q.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d7v_mpb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:auto-flash-remix"} {...others} />);
}

export default Component;
