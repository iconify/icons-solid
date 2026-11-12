import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd-nkug3f.css';
import '../../css/s/s2cll7bjb.css';
import '../../css/g/ge8lssbqq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bd-nkug3f"/><path class="s2cll7bjb"/><path class="ge8lssbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:registry-console-light"} {...others} />);
}

export default Component;
