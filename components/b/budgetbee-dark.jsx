import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sifh8-bod.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sifh8-bod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:budgetbee-dark"} {...others} />);
}

export default Component;
