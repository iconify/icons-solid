import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o7zax3afh.css';
import '../../css/w/w64r6y5by.css';
import '../../css/m/m2sghccup.css';
import '../../css/s/shsxjhb7n.css';
import '../../css/e/ez7_7ggxs.css';
import '../../css/g/g_iufpvye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="o7zax3afh"/><path class="w64r6y5by"/><path class="m2sghccup"/><path class="shsxjhb7n"/><path class="ez7_7ggxs"/><path class="g_iufpvye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:popcorn"} {...others} />);
}

export default Component;
