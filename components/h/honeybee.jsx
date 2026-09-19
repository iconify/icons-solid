import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnhwl-37f.css';
import '../../css/i/ipmkijbyf.css';
import '../../css/x/xsojoj1yq.css';
import '../../css/k/kai3f3bib.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mnhwl-37f"/><path class="ipmkijbyf"/><path class="xsojoj1yq"/><path class="kai3f3bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:honeybee"} {...others} />);
}

export default Component;
