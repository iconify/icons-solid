import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_ckt2lhw.css';

const viewBox = {"width":312,"height":488};
const content = `<path class="h_ckt2lhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:threewords"} {...others} />);
}

export default Component;
