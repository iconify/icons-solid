import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9tnq6bdy.css';
import '../../css/k/k9r7cbc0o.css';
import '../../css/g/gojllccbf.css';

const viewBox = {"width":13,"height":16};
const content = `<path class="v9tnq6bdy"/><path class="k9r7cbc0o"/><path class="gojllccbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:avatarwoman"} {...others} />);
}

export default Component;
