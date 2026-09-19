import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioh76cbbc.css';
import '../../css/k/ksr3op_7i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ioh76cbbc"/><path class="ksr3op_7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-loop-right"} {...others} />);
}

export default Component;
