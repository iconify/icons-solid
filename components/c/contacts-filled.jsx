import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkea-w76j.css';
import '../../css/u/u52trxfes.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkea-w76j"/><path class="u52trxfes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:contacts-filled"} {...others} />);
}

export default Component;
