import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv8e7ibdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cv8e7ibdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gamercastering-logo-block"} {...others} />);
}

export default Component;
