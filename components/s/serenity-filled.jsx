import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auwx0p0zb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="auwx0p0zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:serenity-filled"} {...others} />);
}

export default Component;
