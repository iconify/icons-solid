import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/e/e5spbgbvw.css';
import '../../css/d/dav0ieqlc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQxVk0bOZ"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="e5spbgbvw"/><path class="dav0ieqlc"/></g></mask></defs><path mask="url(#SVGQxVk0bOZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:layout-two"} {...others} />);
}

export default Component;
