import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtmuzrg2o.css';
import '../../css/t/t9ntucclw.css';
import '../../css/v/v81dzmbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xtmuzrg2o"/><path clip-rule="evenodd" class="t9ntucclw"/><path class="v81dzmbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-circle-bold-duotone"} {...others} />);
}

export default Component;
