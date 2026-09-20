import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eztqw9biy.css';
import '../../css/o/o4w27otyj.css';
import '../../css/c/c--edq8yy.css';
import '../../css/w/w8p4wh1ia.css';
import '../../css/j/jalrrobek.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/wwbfnicmo.css';
import '../../css/u/u6zjywb-f.css';
import '../../css/v/vhk9bog-e.css';
import '../../css/z/zi6tmzf1x.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="eztqw9biy"><path class="o4w27otyj"/><circle class="c--edq8yy"/></g><path class="w8p4wh1ia"/><circle class="jalrrobek"/><g class="brzn_0bpr"><path class="wwbfnicmo"/><circle class="u6zjywb-f"/><circle class="vhk9bog-e"/><path class="zi6tmzf1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-playing-water-polo-medium-dark-skin-tone"} {...others} />);
}

export default Component;
