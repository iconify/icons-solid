import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qjqg17_zi.css';
import '../../css/f/f8cw1kb1c.css';
import '../../css/q/qiv--tcpe.css';
import '../../css/l/l5352421z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGENS8nenE"><g class="ufeehvblu"><path class="qjqg17_zi"/><path class="f8cw1kb1c"/><path class="qiv--tcpe"/><path class="l5352421z"/></g></mask></defs><path mask="url(#SVGENS8nenE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:crying-baby"} {...others} />);
}

export default Component;
