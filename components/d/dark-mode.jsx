import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blyiy0b4o.css';
import '../../css/l/lu-nqrbmy.css';
import '../../css/t/tmatxnbbk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHlsFAdQb"><g class="blyiy0b4o"><path class="lu-nqrbmy"/><path class="tmatxnbbk"/></g></mask></defs><path mask="url(#SVGHlsFAdQb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:dark-mode"} {...others} />);
}

export default Component;
