import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpsyw0ehr.css';
import '../../css/e/et10d9jyb.css';
import '../../css/b/bloawkd7m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xpsyw0ehr"/><path class="et10d9jyb"/><path class="bloawkd7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whodb-dark"} {...others} />);
}

export default Component;
