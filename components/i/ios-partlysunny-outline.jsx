import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-jbwsbtj.css';
import '../../css/k/k1oo7kv7m.css';
import '../../css/m/m-iytloac.css';
import '../../css/b/bwkvv2mxj.css';
import '../../css/f/fvry82veo.css';
import '../../css/z/zgtwj8bin.css';
import '../../css/a/actplckew.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k-jbwsbtj"/><path class="k1oo7kv7m"/><path class="m-iytloac"/><path class="bwkvv2mxj"/><path class="fvry82veo"/><g><path class="zgtwj8bin"/></g><path class="actplckew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-partlysunny-outline"} {...others} />);
}

export default Component;
