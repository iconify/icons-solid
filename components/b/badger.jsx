import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7xe7ebpl.css';
import '../../css/j/jmtt3bcpb.css';
import '../../css/o/oupxt4bjd.css';
import '../../css/p/pbnkudctx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n7xe7ebpl"/><path class="jmtt3bcpb"/><path class="oupxt4bjd"/><path class="pbnkudctx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:badger"} {...others} />);
}

export default Component;
