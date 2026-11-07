import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_1z0ch2q.css';
import '../../css/g/gfbhw_b9w.css';
import '../../css/w/wt-_bvkaj.css';
import '../../css/g/g6sfk403a.css';
import '../../css/u/uq7gwrb4t.css';
import '../../css/g/ge0okutli.css';
import '../../css/w/wc16-t_zz.css';
import '../../css/y/yswkd-7tz.css';
import '../../css/g/gsw0kfist.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_1z0ch2q"/><path class="gfbhw_b9w"/><path class="wt-_bvkaj"/><path class="g6sfk403a"/><path class="uq7gwrb4t"/><path class="ge0okutli"/><path class="wc16-t_zz"/><path class="yswkd-7tz"/><path class="gsw0kfist"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-shine-bold"} {...others} />);
}

export default Component;
