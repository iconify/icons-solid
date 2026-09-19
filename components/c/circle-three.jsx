import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/k/k0eackv-p.css';
import '../../css/c/cz2tyx1lz.css';
import '../../css/t/thkv8ksfx.css';
import '../../css/w/w46q43xdh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="k0eackv-p"/><path clip-rule="evenodd" class="cz2tyx1lz"/><path clip-rule="evenodd" class="thkv8ksfx"/><path clip-rule="evenodd" class="w46q43xdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:circle-three"} {...others} />);
}

export default Component;
