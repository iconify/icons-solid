import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8ct0bzjh.css';
import '../../css/b/bkce-3brn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8ct0bzjh"/><path class="bkce-3brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:checkmark-square-fill"} {...others} />);
}

export default Component;
