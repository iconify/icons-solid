import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtfmx7b3v.css';
import '../../css/c/c_7supbtj.css';
import '../../css/n/ng087tlft.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wtfmx7b3v"><path class="c_7supbtj"/><path class="ng087tlft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:down"} {...others} />);
}

export default Component;
