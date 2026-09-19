import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/trn6jnbop.css';
import '../../css/z/zl60ugbjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzhXN5bPn"><g class="rohhhzb0l"><path clip-rule="evenodd" class="trn6jnbop"/><path class="zl60ugbjg"/></g></mask></defs><path mask="url(#SVGzhXN5bPn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:caution"} {...others} />);
}

export default Component;
