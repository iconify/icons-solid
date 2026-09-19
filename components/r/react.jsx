import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywm0dabpy.css';
import '../../css/z/z5s452b-k.css';
import '../../css/b/bv5q348rl.css';
import '../../css/h/h4b91qjsh.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="ywm0dabpy"/><path class="z5s452b-k"/><path class="bv5q348rl"/><path class="h4b91qjsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:react"} {...others} />);
}

export default Component;
