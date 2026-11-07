import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfivsih3f.css';
import '../../css/o/oebj-uxdy.css';
import '../../css/q/qo2z3ox4j.css';
import '../../css/n/npeo6sb4h.css';
import '../../css/e/edpy69b4e.css';
import '../../css/b/bbrwsrh0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfivsih3f"/><path class="oebj-uxdy"/><path clip-rule="evenodd" class="qo2z3ox4j"/><path class="npeo6sb4h"/><path class="edpy69b4e"/><path class="bbrwsrh0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-outline"} {...others} />);
}

export default Component;
