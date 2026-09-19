import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lvwaq0byj.css';
import '../../css/j/jc5ieqbjf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhvLPJbvx"><g class="ufeehvblu"><path class="lvwaq0byj"/><path class="jc5ieqbjf"/></g></mask></defs><path mask="url(#SVGhvLPJbvx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:exchange-three"} {...others} />);
}

export default Component;
