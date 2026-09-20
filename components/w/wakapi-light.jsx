import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v55dtpj9d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v55dtpj9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wakapi-light"} {...others} />);
}

export default Component;
