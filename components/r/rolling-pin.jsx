import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trwdbf92m.css';
import '../../css/o/okzcyibiy.css';
import '../../css/h/hocp7pbvu.css';
import '../../css/m/mk9x21b6p.css';
import '../../css/u/u4juocb7b.css';
import '../../css/m/mp2n5bbgi.css';
import '../../css/i/i4hltq5ka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trwdbf92m wm-shadow"/><path class="okzcyibiy"/><path class="hocp7pbvu"/><path class="mk9x21b6p"/><path class="u4juocb7b"/><path class="mp2n5bbgi wm-shine"/><path class="i4hltq5ka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:rolling-pin"} {...others} />);
}

export default Component;
