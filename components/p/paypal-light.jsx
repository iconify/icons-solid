import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9a9t_3-u.css';
import '../../css/x/xxzjvd64g.css';
import '../../css/f/f8umypbrr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y9a9t_3-u"/><path class="xxzjvd64g"/><path class="f8umypbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:paypal-light"} {...others} />);
}

export default Component;
