import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x76u0mbom.css';
import '../../css/e/e3kfaebri.css';
import '../../css/c/cqobgebwn.css';
import '../../css/b/b6keo2bec.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="x76u0mbom"/><circle class="e3kfaebri"/><circle class="cqobgebwn"/><circle class="b6keo2bec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anonymousoverflow"} {...others} />);
}

export default Component;
