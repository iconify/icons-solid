import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csw0kbbpv.css';
import '../../css/l/l0k6p_bik.css';
import '../../css/h/hq5m6k27d.css';
import '../../css/h/ha6ohkbrc.css';
import '../../css/e/ehc9m5bjx.css';
import '../../css/k/kfqctbbdh.css';
import '../../css/j/jlf-tbbda.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMXKh8bCV"><g class="csw0kbbpv"><path class="l0k6p_bik"/><path class="hq5m6k27d"/><path class="ha6ohkbrc"/><path class="ehc9m5bjx"/><path class="kfqctbbdh"/><path class="jlf-tbbda"/></g></mask></defs><path mask="url(#SVGMXKh8bCV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:train"} {...others} />);
}

export default Component;
