import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/aiuyamb2n.css';
import '../../css/b/bst2n4bqq.css';
import '../../css/k/ko8634b1x.css';
import '../../css/y/y0n8bl3bq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGs4a5HdiH"><g class="aql7dnt-u"><path class="aiuyamb2n"/><circle class="bst2n4bqq"/><circle class="ko8634b1x"/><path class="y0n8bl3bq"/></g></mask></defs><path mask="url(#SVGs4a5HdiH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:list-success"} {...others} />);
}

export default Component;
