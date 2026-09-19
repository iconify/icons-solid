import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/svjez5bnv.css';
import '../../css/v/vzx4lwbww.css';
import '../../css/j/j9j20gb6q.css';
import '../../css/e/eh1mrdboo.css';
import '../../css/v/vlmvdt6mu.css';
import '../../css/w/ws7_-2m-s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtOwF8bCi"><g class="aql7dnt-u"><path class="svjez5bnv"/><path class="vzx4lwbww"/><path class="j9j20gb6q"/><circle class="eh1mrdboo"/><circle class="vlmvdt6mu"/><circle class="ws7_-2m-s"/></g></mask></defs><path mask="url(#SVGtOwF8bCi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:blockchain"} {...others} />);
}

export default Component;
