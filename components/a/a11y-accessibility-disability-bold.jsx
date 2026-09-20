import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmjklobki.css';
import '../../css/z/z4f-w-r2s.css';
import '../../css/a/a69psnbrc.css';
import '../../css/f/fw1nweb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dmjklobki"/><path clip-rule="evenodd" class="z4f-w-r2s"/><path class="a69psnbrc"/><path clip-rule="evenodd" class="fw1nweb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:a11y-accessibility-disability-bold"} {...others} />);
}

export default Component;
