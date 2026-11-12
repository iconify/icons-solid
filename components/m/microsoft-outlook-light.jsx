import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv5gx-44j.css';
import '../../css/s/sobo_lk1b.css';
import '../../css/h/h33hifd-b.css';
import '../../css/i/i69id4bah.css';
import '../../css/o/ooiwd4u1m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lv5gx-44j"/><path class="sobo_lk1b"/><path class="h33hifd-b"/><path class="i69id4bah"/><path class="ooiwd4u1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-outlook-light"} {...others} />);
}

export default Component;
