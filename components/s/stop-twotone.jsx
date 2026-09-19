import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckq9ugjzq.css';
import '../../css/e/eadgts_vo.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ckq9ugjzq"/><path class="eadgts_vo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:stop-twotone"} {...others} />);
}

export default Component;
