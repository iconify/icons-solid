import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou0tc8obk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ou0tc8obk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:makers-vault-light"} {...others} />);
}

export default Component;
