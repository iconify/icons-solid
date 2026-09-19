import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghy9vobgd.css';
import '../../css/b/bqzzynbfg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ghy9vobgd"/><path class="bqzzynbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-flask-outline"} {...others} />);
}

export default Component;
