import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usw_opafh.css';
import '../../css/s/s9jcc4brv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="usw_opafh"/><path class="s9jcc4brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:washing-hand-bold"} {...others} />);
}

export default Component;
