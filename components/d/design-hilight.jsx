import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie3fup9fg.css';
import '../../css/l/lsattvb1c.css';
import '../../css/x/x6mcnkwhc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ie3fup9fg"/><path class="lsattvb1c"/><path class="x6mcnkwhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-hilight"} {...others} />);
}

export default Component;
