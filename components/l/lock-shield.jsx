import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hli067zcj.css';
import '../../css/n/nqh84-7ze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="hli067zcj"/><path class="nqh84-7ze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:lock-shield"} {...others} />);
}

export default Component;
