import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqwujhbmd.css';
import '../../css/t/t2-05fbyq.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hqwujhbmd"/><path class="t2-05fbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:left-to-right-16"} {...others} />);
}

export default Component;
