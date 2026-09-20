import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkw_0_bqz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pkw_0_bqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reality-cruise-dark"} {...others} />);
}

export default Component;
