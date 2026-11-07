import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgd8bzbml.css';
import '../../css/q/qxh6zf45v.css';
import '../../css/b/bk9fnabkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="qxh6zf45v"/><path class="bk9fnabkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-remove-bold-duotone"} {...others} />);
}

export default Component;
