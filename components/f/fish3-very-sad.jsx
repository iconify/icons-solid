import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-g2gdbgn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o-g2gdbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:fish3-very-sad"} {...others} />);
}

export default Component;
