import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmmy2rb5f.css';
import '../../css/w/wjguqb06b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmmy2rb5f"/><path class="wjguqb06b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-up-arrow"} {...others} />);
}

export default Component;
