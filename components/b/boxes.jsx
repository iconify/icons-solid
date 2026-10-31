import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b5xsnw-8z.css';
import '../../css/y/y9ud3nbuv.css';
import '../../css/i/ij8-7-82x.css';
import '../../css/t/tcq6cnb1u.css';
import '../../css/z/z6a869b0y.css';
import '../../css/h/hgeowjx5n.css';
import '../../css/b/balsjh39n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b5xsnw-8z wm-shadow"/><path class="y9ud3nbuv"/><path class="ij8-7-82x"/><path class="tcq6cnb1u"/><path class="wm-a z6a869b0y"/><path class="hgeowjx5n wm-a"/><path class="balsjh39n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:boxes"} {...others} />);
}

export default Component;
