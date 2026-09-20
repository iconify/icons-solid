import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9ot2f44q.css';
import '../../css/i/it9p5abzo.css';
import '../../css/n/n0frhibvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9ot2f44q"/><path class="it9p5abzo"/><path class="n0frhibvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:google-drive-alt"} {...others} />);
}

export default Component;
