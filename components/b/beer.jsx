import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/a/aoaqowbnh.css';
import '../../css/f/fmzg4fbof.css';
import '../../css/e/eep_kvb3z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="aoaqowbnh"/><path class="fmzg4fbof"/><path class="eep_kvb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:beer"} {...others} />);
}

export default Component;
