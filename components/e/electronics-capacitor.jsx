import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5tye3v9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i5tye3v9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:electronics-capacitor"} {...others} />);
}

export default Component;
