import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/yr26ddb1h.css';
import '../../css/a/agrs6obul.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHH3GxFLl"><g class="rohhhzb0l"><circle class="yr26ddb1h"/><path class="agrs6obul"/></g></mask></defs><path mask="url(#SVGHH3GxFLl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:leo"} {...others} />);
}

export default Component;
