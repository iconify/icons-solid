import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asegpn4nk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="asegpn4nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:phone-down-above-five-one-one"} {...others} />);
}

export default Component;
