import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/s514mqd7j.css';
import '../../css/x/xcl2xpzvj.css';
import '../../css/a/ah1xpo2ea.css';
import '../../css/w/wd6j8t2tt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjOMxgchu"><g class="rohhhzb0l"><path class="s514mqd7j"/><path class="xcl2xpzvj"/><circle class="ah1xpo2ea"/><circle class="wd6j8t2tt"/></g></mask></defs><path mask="url(#SVGjOMxgchu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:riding"} {...others} />);
}

export default Component;
