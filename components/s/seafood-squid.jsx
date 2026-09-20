import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vz5j29btj.css';
import '../../css/d/d179-xbow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vz5j29btj"/><path class="d179-xbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:seafood-squid"} {...others} />);
}

export default Component;
