import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/u3garpbbu.css';
import '../../css/d/dl46ut6jf.css';
import '../../css/y/ycgeubb3k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnJoKXcVm"><g class="rohhhzb0l"><path class="u3garpbbu"/><path clip-rule="evenodd" class="dl46ut6jf"/><path class="ycgeubb3k"/></g></mask></defs><path mask="url(#SVGnJoKXcVm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bottle"} {...others} />);
}

export default Component;
