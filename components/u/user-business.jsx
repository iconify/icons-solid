import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e_iwscbqa.css';
import '../../css/z/z6d_ftb-e.css';
import '../../css/x/xs8gor1qb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYQdxLdeN"><g class="aql7dnt-u"><circle class="e_iwscbqa"/><path class="z6d_ftb-e"/><path class="xs8gor1qb"/></g></mask></defs><path mask="url(#SVGYQdxLdeN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:user-business"} {...others} />);
}

export default Component;
