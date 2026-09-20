import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0vsx1bvb.css';
import '../../css/b/bv9_cdbnc.css';
import '../../css/e/eb4pmym9o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j0vsx1bvb"/><path clip-rule="evenodd" class="bv9_cdbnc"/><path clip-rule="evenodd" class="eb4pmym9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:database-solid"} {...others} />);
}

export default Component;
