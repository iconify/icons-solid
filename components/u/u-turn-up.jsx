import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/yiy1b3n8l.css';
import '../../css/o/o4ouqrbli.css';
import '../../css/c/cczr5i5fa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7BcMAebJ"><g class="rohhhzb0l"><path class="yiy1b3n8l"/><path class="o4ouqrbli"/><circle transform="rotate(-90 13 9)" class="cczr5i5fa"/></g></mask></defs><path mask="url(#SVG7BcMAebJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:u-turn-up"} {...others} />);
}

export default Component;
