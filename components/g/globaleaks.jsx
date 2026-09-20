import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhp05tb6w.css';
import '../../css/j/j2qm6zb1r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bhp05tb6w"/><path class="j2qm6zb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:globaleaks"} {...others} />);
}

export default Component;
