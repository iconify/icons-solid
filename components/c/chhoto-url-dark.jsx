import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlbyxzz0c.css';
import '../../css/k/kw9ha86db.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mlbyxzz0c"/><path class="kw9ha86db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chhoto-url-dark"} {...others} />);
}

export default Component;
