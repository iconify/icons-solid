import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmkwqdblk.css';
import '../../css/z/zqttsibyq.css';
import '../../css/r/rt9ok0bqu.css';
import '../../css/i/ig41y4bky.css';
import '../../css/h/hiub-9bnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gmkwqdblk"/><path class="zqttsibyq"/><path class="rt9ok0bqu"/><path clip-rule="evenodd" class="ig41y4bky"/><rect transform="matrix(0 -1 -1 0 19.07 20.15)" class="hiub-9bnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:igloo"} {...others} />);
}

export default Component;
