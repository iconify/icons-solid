import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypft5mbdm.css';
import '../../css/j/jdgd8ngaq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ypft5mbdm"/><path class="jdgd8ngaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:phone-callback-fill"} {...others} />);
}

export default Component;
