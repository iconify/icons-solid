import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sthkmwb8s.css';
import '../../css/j/jd6o1tbif.css';
import '../../css/h/hktml_bzg.css';
import '../../css/g/gfdvn2q5q.css';
import '../../css/p/pr8g8vrmy.css';
import '../../css/x/xcglo6bmw.css';
import '../../css/j/jyjrb9yqj.css';
import '../../css/m/mrz9c3bbt.css';
import '../../css/u/u02vc0bmt.css';
import '../../css/j/jh8qigbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sthkmwb8s wm-shadow"/><path class="jd6o1tbif wm-k"/><path class="hktml_bzg wm-k"/><path class="gfdvn2q5q wm-k"/><path class="pr8g8vrmy wm-k"/><path class="wm-shine xcglo6bmw"/><path class="jyjrb9yqj wm-a"/><path class="mrz9c3bbt wm-a"/><path class="u02vc0bmt wm-k"/><path class="jh8qigbuv wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:anchor"} {...others} />);
}

export default Component;
