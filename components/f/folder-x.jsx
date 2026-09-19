import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmmy2rb5f.css';
import '../../css/k/k9p8d8b2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmmy2rb5f"/><path class="k9p8d8b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-x"} {...others} />);
}

export default Component;
