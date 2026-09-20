import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtmsfsbcp.css';
import '../../css/e/e041-1bai.css';
import '../../css/e/eika0rrpi.css';

const viewBox = {"width":64,"height":64};
const content = `<circle class="jtmsfsbcp"/><circle class="e041-1bai"/><circle class="eika0rrpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:more-alt"} {...others} />);
}

export default Component;
