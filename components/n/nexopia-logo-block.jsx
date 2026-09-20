import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vue9z5odm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vue9z5odm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:nexopia-logo-block"} {...others} />);
}

export default Component;
