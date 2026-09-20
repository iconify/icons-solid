import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/j/jygq7yblj.css';
import '../../css/o/o-jj-xa3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="jygq7yblj"/><path class="o-jj-xa3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:street-sign"} {...others} />);
}

export default Component;
