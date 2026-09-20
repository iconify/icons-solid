import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5lssuuqi.css';
import '../../css/l/l6-eqnrfk.css';
import '../../css/l/lvzdmsb9x.css';
import '../../css/c/cf9gd76rf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m5lssuuqi"/><circle class="l6-eqnrfk"/><path class="lvzdmsb9x"/><path class="cf9gd76rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudreve-light"} {...others} />);
}

export default Component;
