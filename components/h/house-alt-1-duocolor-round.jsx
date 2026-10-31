import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfxdh1bjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfxdh1bjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-1-duocolor-round"} {...others} />);
}

export default Component;
