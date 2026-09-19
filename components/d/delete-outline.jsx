import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_bai2k1u.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e_bai2k1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:delete-outline"} {...others} />);
}

export default Component;
