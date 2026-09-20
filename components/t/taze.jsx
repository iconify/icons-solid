import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b85kfggca.css';
import '../../css/d/dqv-n8bve.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b85kfggca"/><path class="dqv-n8bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:taze"} {...others} />);
}

export default Component;
