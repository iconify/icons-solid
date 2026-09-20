import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/s1-q74bch.css';
import '../../css/c/cdl3xs5nh.css';
import '../../css/y/y-g3wxren.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="s1-q74bch"/><path class="cdl3xs5nh"/><path class="y-g3wxren"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:presentation-counter-2"} {...others} />);
}

export default Component;
