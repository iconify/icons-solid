import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcse9kmkw.css';
import '../../css/e/e54jf8rbf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jcse9kmkw"/><path class="e54jf8rbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:blogger2"} {...others} />);
}

export default Component;
