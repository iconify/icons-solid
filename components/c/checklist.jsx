import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k0ly7u-ku.css';
import '../../css/s/skqjyo4jb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoSkjCeJU"><g class="aql7dnt-u"><path class="k0ly7u-ku"/><path class="skqjyo4jb"/></g></mask></defs><path mask="url(#SVGoSkjCeJU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:checklist"} {...others} />);
}

export default Component;
