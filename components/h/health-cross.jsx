import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2-40acus.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n2-40acus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:health-cross"} {...others} />);
}

export default Component;
