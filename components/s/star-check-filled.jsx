import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqd7f1bqb.css';
import '../../css/e/eatsjcb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqd7f1bqb"/><path class="eatsjcb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:star-check-filled"} {...others} />);
}

export default Component;
