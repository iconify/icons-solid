import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bzco58gwi.css';
import '../../css/q/q7kngdcwr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeK9TWn0B"><g class="rohhhzb0l"><path clip-rule="evenodd" class="bzco58gwi"/><path class="q7kngdcwr"/></g></mask></defs><path mask="url(#SVGeK9TWn0B)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:nutrition"} {...others} />);
}

export default Component;
