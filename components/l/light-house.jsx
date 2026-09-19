import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sechjcbnq.css';
import '../../css/h/h7v1_8oxy.css';
import '../../css/v/vky0p5_8d.css';
import '../../css/s/s215oqsdc.css';
import '../../css/k/kns8fnb5y.css';
import '../../css/o/ogdxlgblf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG95D6pd4v"><g class="ufeehvblu"><path class="sechjcbnq"/><path class="h7v1_8oxy"/><path class="vky0p5_8d"/><path class="s215oqsdc"/><path class="kns8fnb5y"/><path class="ogdxlgblf"/></g></mask></defs><path mask="url(#SVG95D6pd4v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:light-house"} {...others} />);
}

export default Component;
