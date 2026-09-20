import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdfgdtc2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdfgdtc2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:expand-up-light"} {...others} />);
}

export default Component;
