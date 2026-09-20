import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sj4zuubtz.css';
import '../../css/x/x7h3yhw-a.css';
import '../../css/b/b2jxzxuul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="sj4zuubtz"/><path class="x7h3yhw-a"/><path class="b2jxzxuul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cassette-tape-1"} {...others} />);
}

export default Component;
