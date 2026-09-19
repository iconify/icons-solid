import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v7dqau_le.css';
import '../../css/f/froxpgbit.css';
import '../../css/s/s3-3je0sv.css';
import '../../css/p/p3ey45bcb.css';
import '../../css/z/zbsa8-bsq.css';
import '../../css/x/x3zu8xpqw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGq5YOYdtS"><g class="wwvp95byt"><rect class="v7dqau_le"/><path class="froxpgbit"/><path class="s3-3je0sv"/><path class="p3ey45bcb"/><circle class="zbsa8-bsq"/><circle class="x3zu8xpqw"/></g></mask></defs><path mask="url(#SVGq5YOYdtS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:data-screen"} {...others} />);
}

export default Component;
