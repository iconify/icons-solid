import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z17k1cbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z17k1cbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:letter-e-circle-outline"} {...others} />);
}

export default Component;
