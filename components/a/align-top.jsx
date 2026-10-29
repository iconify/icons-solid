import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku7171sjo.css';
import '../../css/p/puz6dx0rk.css';
import '../../css/h/h51rxinlw.css';
import '../../css/j/jlpkn5nks.css';
import '../../css/y/ynh0jzbsn.css';
import '../../css/b/b9emh-jsm.css';
import '../../css/a/ay80_0hhn.css';
import '../../css/l/lohe0sbse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ku7171sjo wm-shadow"/><path class="puz6dx0rk wm-k"/><path class="h51rxinlw wm-k"/><path class="jlpkn5nks wm-a"/><path class="wm-a ynh0jzbsn"/><path class="b9emh-jsm wm-a"/><path class="ay80_0hhn wm-a"/><path class="lohe0sbse wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:align-top"} {...others} />);
}

export default Component;
