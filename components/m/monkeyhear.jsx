import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyyuksbkg.css';
import '../../css/q/qfogileml.css';
import '../../css/k/krxledc2m.css';
import '../../css/z/zcw66ybby.css';
import '../../css/e/elly5568l.css';
import '../../css/z/zdof4gt7a.css';
import '../../css/l/l3onylb5x.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="eyyuksbkg"/><path class="qfogileml"/><path class="krxledc2m"/><path class="zcw66ybby"/><path class="elly5568l"/><path class="zdof4gt7a"/><path class="l3onylb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:monkeyhear"} {...others} />);
}

export default Component;
