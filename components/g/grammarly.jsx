import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usf8_8x2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="usf8_8x2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:grammarly"} {...others} />);
}

export default Component;
