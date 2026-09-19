import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozo2onbdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozo2onbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-clean-gel"} {...others} />);
}

export default Component;
