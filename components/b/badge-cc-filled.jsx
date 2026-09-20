import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk7uk6brb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uk7uk6brb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:badge-cc-filled"} {...others} />);
}

export default Component;
