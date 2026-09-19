import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvg0ib-hb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nvg0ib-hb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:tooth-filled"} {...others} />);
}

export default Component;
