import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avdx2ebrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="avdx2ebrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:livejournal-logo-block"} {...others} />);
}

export default Component;
