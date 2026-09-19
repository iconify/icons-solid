import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/t/t3j6luy7a.css';
import '../../css/u/uowmflbel.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9e55ocrc"><g class="ufeehvblu"><path class="t3j6luy7a"/><path class="uowmflbel"/></g></mask></defs><path mask="url(#SVG9e55ocrc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:setting-one"} {...others} />);
}

export default Component;
