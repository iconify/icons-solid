import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lvwaq0byj.css';
import '../../css/o/opbtt0byp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzSbqXbqj"><g class="ufeehvblu"><path class="lvwaq0byj"/><path class="opbtt0byp"/></g></mask></defs><path mask="url(#SVGzSbqXbqj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shield-add"} {...others} />);
}

export default Component;
