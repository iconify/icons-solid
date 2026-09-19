import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lmoo01bav.css';
import '../../css/k/k5rx2ix5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyZNfyd1N"><g class="ufeehvblu"><path class="lmoo01bav"/><path class="k5rx2ix5o"/></g></mask></defs><path mask="url(#SVGyZNfyd1N)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:application-one"} {...others} />);
}

export default Component;
