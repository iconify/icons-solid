import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uuexjlzzv.css';
import '../../css/k/kz-5a-d1e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeZgSPbIM"><g class="aql7dnt-u"><path class="uuexjlzzv"/><path class="kz-5a-d1e"/></g></mask></defs><path mask="url(#SVGeZgSPbIM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:blossom"} {...others} />);
}

export default Component;
