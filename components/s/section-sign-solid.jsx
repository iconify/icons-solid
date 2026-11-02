import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4rz78bcq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v4rz78bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:section-sign-solid"} {...others} />);
}

export default Component;
