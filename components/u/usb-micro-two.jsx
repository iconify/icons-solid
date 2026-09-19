import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/upg4zdb7x.css';
import '../../css/r/rms-2fbbc.css';
import '../../css/p/p0pjh8bpe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVmbgRceM"><g class="aql7dnt-u"><path class="upg4zdb7x"/><path class="rms-2fbbc"/><path class="p0pjh8bpe"/></g></mask></defs><path mask="url(#SVGVmbgRceM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:usb-micro-two"} {...others} />);
}

export default Component;
