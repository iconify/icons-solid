import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awiyetucd.css';
import '../../css/s/sak0m1nef.css';
import '../../css/e/ef7x2zbjy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtCKZFemV"><g clip-rule="evenodd" class="awiyetucd"><path class="sak0m1nef"/><path class="ef7x2zbjy"/></g></mask></defs><path mask="url(#SVGtCKZFemV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vr-glasses"} {...others} />);
}

export default Component;
