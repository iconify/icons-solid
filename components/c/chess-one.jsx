import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfneylbfi.css';
import '../../css/u/u0e4hubih.css';
import '../../css/v/v5z1k9bdd.css';
import '../../css/j/jwh1tsaxv.css';
import '../../css/t/tqi7ujbqj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHt2wPZKw"><g class="ft5dv1b6b"><path class="wfneylbfi"/><path class="u0e4hubih"/><path class="v5z1k9bdd"/><path class="jwh1tsaxv"/><path class="tqi7ujbqj"/></g></mask></defs><path mask="url(#SVGHt2wPZKw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chess-one"} {...others} />);
}

export default Component;
