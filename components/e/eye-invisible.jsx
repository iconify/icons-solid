import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjqyt7b_n.css';
import '../../css/g/gi_7ztbfp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="pjqyt7b_n"/><path class="gi_7ztbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:eye-invisible"} {...others} />);
}

export default Component;
