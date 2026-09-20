import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxmz3ienn.css';
import '../../css/w/wm9w19bdd.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="xxmz3ienn"/><path class="wm9w19bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bumpsight-dark"} {...others} />);
}

export default Component;
