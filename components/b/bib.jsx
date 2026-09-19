import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/b/bvsicac_i.css';
import '../../css/k/kfk_307bu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTf2ywlsa"><g class="ylrso7y3c"><path class="bvsicac_i"/><path class="kfk_307bu"/></g></mask></defs><path mask="url(#SVGTf2ywlsa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bib"} {...others} />);
}

export default Component;
