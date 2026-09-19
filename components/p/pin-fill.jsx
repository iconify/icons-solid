import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q919pubya.css';
import '../../css/e/epbp3tnvv.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="q919pubya"/><path class="epbp3tnvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:pin-fill"} {...others} />);
}

export default Component;
