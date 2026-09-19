import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8bbxr3ye.css';
import '../../css/i/i28ld-2jv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8bbxr3ye duoicon-secondary-layer"/><path class="duoicon-primary-layer i28ld-2jv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:bank"} {...others} />);
}

export default Component;
