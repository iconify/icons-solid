import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/laria4ctv.css';
import '../../css/z/z-z9v84ao.css';
import '../../css/g/goi7h-9jx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh8rQFdVp"><g class="aql7dnt-u"><path class="laria4ctv"/><path clip-rule="evenodd" class="z-z9v84ao"/><path class="goi7h-9jx"/></g></mask></defs><path mask="url(#SVGh8rQFdVp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:test-tube"} {...others} />);
}

export default Component;
