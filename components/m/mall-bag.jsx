import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/e/ez7docclp.css';
import '../../css/f/fxrnyjbgc.css';
import '../../css/x/xzlilxrec.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGb4mctTCP"><g class="ufeehvblu"><path class="ez7docclp"/><path class="fxrnyjbgc"/><path class="xzlilxrec"/></g></mask></defs><path mask="url(#SVGb4mctTCP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mall-bag"} {...others} />);
}

export default Component;
