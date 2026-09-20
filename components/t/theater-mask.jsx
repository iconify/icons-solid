import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xebj6eb0c.css';
import '../../css/b/b1odrst1c.css';
import '../../css/l/l7cu3lb6i.css';
import '../../css/n/nhgkhxbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xebj6eb0c"/><path class="b1odrst1c"/><path class="l7cu3lb6i"/><path class="nhgkhxbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:theater-mask"} {...others} />);
}

export default Component;
