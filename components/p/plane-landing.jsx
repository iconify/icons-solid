import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg9qk4lcv.css';
import '../../css/h/hg0jx9zvx.css';
import '../../css/o/o-x0opbjc.css';
import '../../css/i/im9gi2bun.css';
import '../../css/i/ix7m3x4rw.css';
import '../../css/k/knuv1sb6c.css';
import '../../css/u/u-l3xbcrk.css';
import '../../css/s/sjdcwnb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hg9qk4lcv wm-shadow"/><path class="hg0jx9zvx wm-k"/><path class="o-x0opbjc wm-k"/><path class="im9gi2bun wm-k"/><path class="ix7m3x4rw wm-k"/><path class="knuv1sb6c wm-k"/><path class="u-l3xbcrk wm-shine"/><path class="sjdcwnb9y wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:plane-landing"} {...others} />);
}

export default Component;
