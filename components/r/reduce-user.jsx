import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e_iwscbqa.css';
import '../../css/p/pdoqb-fef.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHw5cAdII"><g class="aql7dnt-u"><circle class="e_iwscbqa"/><path class="pdoqb-fef"/></g></mask></defs><path mask="url(#SVGHw5cAdII)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:reduce-user"} {...others} />);
}

export default Component;
