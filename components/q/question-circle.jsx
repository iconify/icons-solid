import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuedu7c-d.css';
import '../../css/j/j84tewqll.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="kuedu7c-d"/><path class="j84tewqll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:question-circle"} {...others} />);
}

export default Component;
