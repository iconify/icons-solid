import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/b7c5wh5qe.css';
import '../../css/o/o5hmfpl1w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeATNtgLq"><g class="s9cl3zbei"><rect class="b7c5wh5qe"/><path class="o5hmfpl1w"/></g></mask></defs><path mask="url(#SVGeATNtgLq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ipad"} {...others} />);
}

export default Component;
