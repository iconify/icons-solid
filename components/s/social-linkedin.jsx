import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilecwd6xt.css';
import '../../css/t/tnupwvb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilecwd6xt"/><ellipse class="tnupwvb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-linkedin"} {...others} />);
}

export default Component;
