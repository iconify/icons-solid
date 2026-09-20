import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl1m6jbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nl1m6jbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:sign-hashtag-solid"} {...others} />);
}

export default Component;
