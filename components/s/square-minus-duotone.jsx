import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d639svbxj.css';
import '../../css/t/t3t9a1dtl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d639svbxj"/><path class="t3t9a1dtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:square-minus-duotone"} {...others} />);
}

export default Component;
