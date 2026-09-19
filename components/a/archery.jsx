import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/x_5bsx01w.css';
import '../../css/g/ghq9t7i-c.css';
import '../../css/f/f47gc0bvj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0C0lufRf"><g class="rohhhzb0l"><path class="x_5bsx01w"/><circle class="ghq9t7i-c"/><path class="f47gc0bvj"/></g></mask></defs><path mask="url(#SVG0C0lufRf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:archery"} {...others} />);
}

export default Component;
