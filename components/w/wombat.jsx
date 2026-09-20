import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6v7tkb8a.css';
import '../../css/q/qtysfgqaq.css';
import '../../css/i/im3ryyb4n.css';
import '../../css/a/a_7gyw9ut.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a6v7tkb8a"/><path class="qtysfgqaq"/><path clip-rule="evenodd" class="im3ryyb4n"/><path class="a_7gyw9ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wombat"} {...others} />);
}

export default Component;
