import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceu87zb9i.css';
import '../../css/u/uwvn7obqq.css';
import '../../css/b/buhkhbh6c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ceu87zb9i"/><path class="uwvn7obqq"/><path class="buhkhbh6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:crown"} {...others} />);
}

export default Component;
