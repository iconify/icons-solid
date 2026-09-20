import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7w6s7b2e.css';
import '../../css/v/v5pqt5bwd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b7w6s7b2e"/><path class="v5pqt5bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:call-missed-16"} {...others} />);
}

export default Component;
