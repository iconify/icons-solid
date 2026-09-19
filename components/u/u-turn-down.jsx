import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vq3pbhbzo.css';
import '../../css/u/u_erkqblh.css';
import '../../css/i/ilmtambaf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0uZQceQW"><g class="rohhhzb0l"><path class="vq3pbhbzo"/><path class="u_erkqblh"/><circle transform="rotate(90 35 39)" class="ilmtambaf"/></g></mask></defs><path mask="url(#SVG0uZQceQW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:u-turn-down"} {...others} />);
}

export default Component;
