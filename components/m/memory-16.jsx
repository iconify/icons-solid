import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx94_1hhr.css';
import '../../css/t/tde2ctmpe.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tx94_1hhr"/><path clip-rule="evenodd" class="tde2ctmpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:memory-16"} {...others} />);
}

export default Component;
