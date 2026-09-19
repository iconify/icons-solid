import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pen3qlbpt.css';
import '../../css/q/qmyv_61bs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pen3qlbpt"/><path class="qmyv_61bs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:devcontainer"} {...others} />);
}

export default Component;
