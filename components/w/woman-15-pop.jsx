import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/v/vuujtwblu.css';
import '../../css/w/wqzsem_xp.css';
import '../../css/w/wmu585bqp.css';
import '../../css/c/cjdv2tbsf.css';
import '../../css/m/mx048mwst.css';
import '../../css/a/annkm84kt.css';
import '../../css/g/gr39dfblv.css';
import '../../css/n/nac8hdsel.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="vuujtwblu"/><path class="wqzsem_xp"/><path class="wmu585bqp"/><path clip-rule="evenodd" class="cjdv2tbsf"/><path class="mx048mwst"/><path class="annkm84kt"/><path clip-rule="evenodd" class="gr39dfblv"/><path clip-rule="evenodd" class="nac8hdsel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:woman-15-pop"} {...others} />);
}

export default Component;
