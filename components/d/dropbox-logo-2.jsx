import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8df1obis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8df1obis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:dropbox-logo-2"} {...others} />);
}

export default Component;
