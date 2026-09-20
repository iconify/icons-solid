import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh1xwbbbl.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bq-t95byt.css';
import '../../css/d/dgyfe-b_i.css';
import '../../css/n/ntvryxjzn.css';
import '../../css/o/o1l-eibzl.css';
import '../../css/d/deztmt8gd.css';
import '../../css/h/hg--o58tf.css';
import '../../css/w/w2fo7nbhd.css';
import '../../css/n/n2ao97bce.css';
import '../../css/e/e66bwacla.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGbAUQKU6v" class="fh1xwbbbl"/></defs><g class="ft5dv1b6b"><use href="#SVGbAUQKU6v"/><use href="#SVGbAUQKU6v"/><path class="bq-t95byt"/><path class="dgyfe-b_i"/><path class="ntvryxjzn"/><path class="o1l-eibzl"/><path class="deztmt8gd"/><path class="hg--o58tf"/><path class="w2fo7nbhd"/><path class="n2ao97bce"/><path class="e66bwacla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:coffee-espresso-machine"} {...others} />);
}

export default Component;
