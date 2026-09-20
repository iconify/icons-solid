import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5_3hdchp.css';
import '../../css/v/vlf_obbzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i5_3hdchp"/><path class="vlf_obbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mc"} {...others} />);
}

export default Component;
