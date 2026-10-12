import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9tq9hbvj.css';
import '../../css/k/kjn-z4brj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9tq9hbvj"/><path class="kjn-z4brj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:star-plus-filled"} {...others} />);
}

export default Component;
