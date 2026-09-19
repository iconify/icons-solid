import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wkaq4nb8y.css';
import '../../css/c/chwdkhbaz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxIXYQbJu"><g class="ufeehvblu"><path class="wkaq4nb8y"/><path class="chwdkhbaz"/></g></mask></defs><path mask="url(#SVGxIXYQbJu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pay-code"} {...others} />);
}

export default Component;
