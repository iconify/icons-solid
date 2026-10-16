import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzik44b8k.css';
import '../../css/b/blf-vc_7t.css';
import '../../css/z/zuokr1b7x.css';
import '../../css/y/yjdya6b-u.css';
import '../../css/g/g177imbyy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gzik44b8k"/><path class="blf-vc_7t"/><path class="zuokr1b7x"/><path class="yjdya6b-u"/><path class="g177imbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moped-48-bold"} {...others} />);
}

export default Component;
