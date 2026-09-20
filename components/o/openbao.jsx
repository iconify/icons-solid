import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo6tgw96g.css';
import '../../css/a/a5hkwzb3n.css';
import '../../css/r/renh8_kgy.css';
import '../../css/b/bf-kbob7n.css';
import '../../css/s/saw-75b7p.css';
import '../../css/s/s3gzc8bbp.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="jo6tgw96g"/><path class="a5hkwzb3n"/><path class="renh8_kgy"/><path class="bf-kbob7n"/><path class="saw-75b7p"/><path class="s3gzc8bbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openbao"} {...others} />);
}

export default Component;
