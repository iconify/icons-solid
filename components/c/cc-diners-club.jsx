import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vym9ewb-k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vym9ewb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:cc-diners-club"} {...others} />);
}

export default Component;
