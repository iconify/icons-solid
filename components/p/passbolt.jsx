import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9jnxm6uc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s9jnxm6uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:passbolt"} {...others} />);
}

export default Component;
