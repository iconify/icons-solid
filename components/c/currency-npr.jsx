import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msf46bcth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msf46bcth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-npr"} {...others} />);
}

export default Component;
