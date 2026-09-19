import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ayeqpac6o.css';
import '../../css/q/q4c5ixzyh.css';
import '../../css/f/fal6nbbdw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzy5CJTXn"><g class="rohhhzb0l"><path class="ayeqpac6o"/><path class="q4c5ixzyh"/><path class="fal6nbbdw"/></g></mask></defs><path mask="url(#SVGzy5CJTXn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:experiment"} {...others} />);
}

export default Component;
