import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sllo7vb2i.css';
import '../../css/n/n90dm-bwt.css';
import '../../css/a/aovzl8biz.css';
import '../../css/f/ff8n8ucqm.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="sllo7vb2i"/><path class="n90dm-bwt"/><circle class="aovzl8biz"/><path class="ff8n8ucqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-male-female"} {...others} />);
}

export default Component;
