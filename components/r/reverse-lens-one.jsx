import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zlj7xlcek.css';
import '../../css/d/dul_3ubyn.css';
import '../../css/j/jf6c_bblm.css';
import '../../css/b/bo68xib1s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZuRgvdWm"><g class="s9cl3zbei"><path class="zlj7xlcek"/><path class="dul_3ubyn"/><path class="jf6c_bblm"/><path class="bo68xib1s"/></g></mask></defs><path mask="url(#SVGZuRgvdWm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:reverse-lens-one"} {...others} />);
}

export default Component;
