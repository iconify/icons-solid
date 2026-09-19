import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmmy2rb5f.css';
import '../../css/b/b-h_hbciq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmmy2rb5f"/><path class="b-h_hbciq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-down-arrow"} {...others} />);
}

export default Component;
