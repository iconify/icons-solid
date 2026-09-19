import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/s/sz15ivukq.css';
import '../../css/c/chfhwvn0j.css';
import '../../css/a/awrkdxbfk.css';
import '../../css/s/sah188bol.css';
import '../../css/x/xhbs8_0xf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcxBwyaUA"><g class="gopnm44um"><path class="sz15ivukq"/><path class="chfhwvn0j"/><path class="awrkdxbfk"/><path class="sah188bol"/><path class="xhbs8_0xf"/></g></mask></defs><path mask="url(#SVGcxBwyaUA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:termination-file"} {...others} />);
}

export default Component;
