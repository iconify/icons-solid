import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz4btudrr.css';
import '../../css/j/jzoai3n_c.css';
import '../../css/g/g-rbg_bfo.css';
import '../../css/q/q9p89bxal.css';
import '../../css/l/l-p5zxqmg.css';
import '../../css/f/fthrs9n1t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dz4btudrr ouiIcon__fillSecondary"/><path class="jzoai3n_c"/><path class="g-rbg_bfo ouiIcon__fillSecondary"/><path class="q9p89bxal"/><path class="l-p5zxqmg ouiIcon__fillSecondary"/><path class="fthrs9n1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-advanced-settings"} {...others} />);
}

export default Component;
