import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmmy2rb5f.css';
import '../../css/y/yqu1lvw7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmmy2rb5f"/><path class="yqu1lvw7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-plus"} {...others} />);
}

export default Component;
