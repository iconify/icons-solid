import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmn--yb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jmn--yb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:link-broken"} {...others} />);
}

export default Component;
