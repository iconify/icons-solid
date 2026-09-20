import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahbo5262y.css';
import '../../css/o/ocrhpjbbu.css';
import '../../css/u/uh7pe_bjq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ahbo5262y"/><circle class="ocrhpjbbu"/><path class="uh7pe_bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:suwayomi-light"} {...others} />);
}

export default Component;
