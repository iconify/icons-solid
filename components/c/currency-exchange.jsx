import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekvdh_bjk.css';
import '../../css/n/n5smlmpfr.css';
import '../../css/j/j3985abug.css';
import '../../css/d/dclgqfbhu.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="ekvdh_bjk"/><path class="n5smlmpfr"/><circle class="j3985abug"/><path class="dclgqfbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:currency-exchange"} {...others} />);
}

export default Component;
