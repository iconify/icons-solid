import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkr2s5b1k.css';
import '../../css/c/c54521b1r.css';
import '../../css/a/as_-b_2sz.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="lkr2s5b1k"/><path class="c54521b1r"/><path class="as_-b_2sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:booklore"} {...others} />);
}

export default Component;
