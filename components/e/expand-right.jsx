import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/x/x16illbqh.css';
import '../../css/e/egt6m3bbv.css';
import '../../css/b/bq41sjbfa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfkXvWiBU"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="x16illbqh"/><path class="egt6m3bbv"/><path class="bq41sjbfa"/></g></mask></defs><path mask="url(#SVGfkXvWiBU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:expand-right"} {...others} />);
}

export default Component;
