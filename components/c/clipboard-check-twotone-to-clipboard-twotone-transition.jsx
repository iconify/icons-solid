import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c92a3r.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/w/wc7n7b.css';
import '../../css/e/ecu16w.css';
import '../../css/f/fequ5n.css';
import '../../css/s/so-to-12.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c92a3r"/><path class="qa-o7h taf2xz wc7n7b"/><path class="ecu16w qa-o7h"/><path class="fequ5n qa-o7h taf2xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:clipboard-check-twotone-to-clipboard-twotone-transition"} {...others} />);
}

export default Component;
