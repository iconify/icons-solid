import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imklbhx5a.css';
import '../../css/g/g2u40lrig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imklbhx5a"/><path class="g2u40lrig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:currency-euro-bubble"} {...others} />);
}

export default Component;
