import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/z/z9rezk5xx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6FlpOeTm"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="z9rezk5xx"/></g></mask></defs><path mask="url(#SVG6FlpOeTm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:eight-key"} {...others} />);
}

export default Component;
