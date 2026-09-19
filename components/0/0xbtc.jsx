import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i18k795dc.css';
import '../../css/m/md286fbip.css';
import '../../css/a/aildwlbyw.css';
import '../../css/g/gzs6bzqtu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="i18k795dc"/><g class="md286fbip"><path class="aildwlbyw"/><path class="gzs6bzqtu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:0xbtc"} {...others} />);
}

export default Component;
