import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_aaqkbpl.css';
import '../../css/u/uzefn3-hw.css';
import '../../css/n/ndep3kwgj.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="n_aaqkbpl"/><path clip-rule="evenodd" class="uzefn3-hw"/><path clip-rule="evenodd" class="ndep3kwgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-tables-dark"} {...others} />);
}

export default Component;
