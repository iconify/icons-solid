import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lojnqnl8t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lojnqnl8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:people-sleeping-in-bunkbeds-in-eaved-leanto-shelter"} {...others} />);
}

export default Component;
