import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n64m8nfws.css';
import '../../css/o/oc_f315vi.css';
import '../../css/d/dg2xzd6cb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n64m8nfws"/><path class="oc_f315vi"/><path class="dg2xzd6cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-in-manual-wheelchair-facing-right"} {...others} />);
}

export default Component;
