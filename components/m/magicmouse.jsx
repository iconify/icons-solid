import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzkh3bczm.css';
import '../../css/k/kic1kiyda.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="qzkh3bczm"/><circle class="kic1kiyda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:magicmouse"} {...others} />);
}

export default Component;
