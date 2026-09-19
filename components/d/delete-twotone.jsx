import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qugl5fp2v.css';
import '../../css/j/jln5mowjq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qugl5fp2v"/><path class="jln5mowjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:delete-twotone"} {...others} />);
}

export default Component;
