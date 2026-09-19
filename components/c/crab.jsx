import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/ronjz08st.css';
import '../../css/v/v9f1r8wfi.css';
import '../../css/e/e92ucll6c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQmGvxe4G"><g class="aql7dnt-u"><path class="ronjz08st"/><rect class="v9f1r8wfi"/><path class="e92ucll6c"/></g></mask></defs><path mask="url(#SVGQmGvxe4G)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:crab"} {...others} />);
}

export default Component;
