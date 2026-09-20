import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pswvvyb7g.css';
import '../../css/u/u-pu14bwo.css';
import '../../css/k/k78jxprsf.css';
import '../../css/s/s2mndpb-r.css';
import '../../css/n/n3m-cyq-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pswvvyb7g"/><path class="u-pu14bwo"/><path class="k78jxprsf"/><path class="s2mndpb-r"/><path class="n3m-cyq-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:question-help-message"} {...others} />);
}

export default Component;
