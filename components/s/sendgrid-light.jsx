import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6coe0beu.css';
import '../../css/l/lboc1x51a.css';
import '../../css/c/clfv5tb8j.css';
import '../../css/a/a-5l6ub9n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r6coe0beu"/><path class="lboc1x51a"/><path class="clfv5tb8j"/><path class="a-5l6ub9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sendgrid-light"} {...others} />);
}

export default Component;
