import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz_5lijdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz_5lijdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:curtain-fill"} {...others} />);
}

export default Component;
