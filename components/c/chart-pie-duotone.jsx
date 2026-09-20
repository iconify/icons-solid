import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp348r2av.css';
import '../../css/j/jfqxk9a8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bp348r2av"/><path class="jfqxk9a8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chart-pie-duotone"} {...others} />);
}

export default Component;
