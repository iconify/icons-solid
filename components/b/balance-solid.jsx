import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4jbqtvpk.css';
import '../../css/g/glxcbqcdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4jbqtvpk"/><path class="glxcbqcdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:balance-solid"} {...others} />);
}

export default Component;
