import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o48combuk.css';
import '../../css/m/m0bye0bbv.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="o48combuk"/><path class="m0bye0bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:leaf-6"} {...others} />);
}

export default Component;
