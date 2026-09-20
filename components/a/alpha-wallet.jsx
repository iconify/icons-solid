import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9m2ddbuh.css';
import '../../css/p/pfsh8mdfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9m2ddbuh"/><path class="pfsh8mdfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:alpha-wallet"} {...others} />);
}

export default Component;
