import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxi8hkb5i.css';
import '../../css/h/hvxzctpfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxi8hkb5i"/><path clip-rule="evenodd" class="hvxzctpfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-bold"} {...others} />);
}

export default Component;
