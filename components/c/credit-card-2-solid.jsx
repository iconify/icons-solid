import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnd1kubmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vnd1kubmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:credit-card-2-solid"} {...others} />);
}

export default Component;
