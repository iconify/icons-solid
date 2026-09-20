import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmbgd7baw.css';
import '../../css/k/kczhvw7ao.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lmbgd7baw"/><path class="kczhvw7ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:roundcube-light"} {...others} />);
}

export default Component;
