import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/v/v-f79accf.css';
import '../../css/p/pjeackbyg.css';
import '../../css/b/b0u8-bb3i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="v-f79accf"/><path class="pjeackbyg"/><circle class="b0u8-bb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stand-up"} {...others} />);
}

export default Component;
