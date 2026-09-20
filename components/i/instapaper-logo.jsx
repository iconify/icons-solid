import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbo_8fb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbo_8fb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:instapaper-logo"} {...others} />);
}

export default Component;
