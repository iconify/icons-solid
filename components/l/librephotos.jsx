import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydwt8bbeh.css';
import '../../css/x/x5xtfzb4f.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ydwt8bbeh"/><path class="x5xtfzb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:librephotos"} {...others} />);
}

export default Component;
