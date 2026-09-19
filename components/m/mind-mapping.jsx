import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/ef4d19eyw.css';
import '../../css/h/h8qfdnbff.css';
import '../../css/u/u2li8tusu.css';
import '../../css/b/bwwzctbgi.css';
import '../../css/r/r53fracuj.css';
import '../../css/m/meeo2ibna.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ef4d19eyw"/><path class="h8qfdnbff"/><path class="u2li8tusu"/><path class="bwwzctbgi"/><path class="r53fracuj"/><path class="meeo2ibna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mind-mapping"} {...others} />);
}

export default Component;
