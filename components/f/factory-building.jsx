import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bce03b55u.css';
import '../../css/o/o1ppvf-yk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGD0pARXmg"><g class="wwvp95byt"><path class="bce03b55u"/><path class="o1ppvf-yk"/></g></mask></defs><path mask="url(#SVGD0pARXmg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:factory-building"} {...others} />);
}

export default Component;
