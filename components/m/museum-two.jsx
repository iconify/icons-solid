import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/y/y1g7ndbcc.css';
import '../../css/v/vpr5xac0l.css';
import '../../css/b/b-nlqbjlj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiQerUn8u"><g class="v3_i3wktz"><path class="j9hg1or3h"/><path class="y1g7ndbcc"/><path class="vpr5xac0l"/><path class="b-nlqbjlj"/></g></mask></defs><path mask="url(#SVGiQerUn8u)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:museum-two"} {...others} />);
}

export default Component;
