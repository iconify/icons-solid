import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qja8evbtd.css';
import '../../css/q/qitu6dbyz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qja8evbtd"/><path class="qitu6dbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:papermc-velocity-dark"} {...others} />);
}

export default Component;
