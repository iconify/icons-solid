import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw4mo75jm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aw4mo75jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gowalla-logo-4-block"} {...others} />);
}

export default Component;
