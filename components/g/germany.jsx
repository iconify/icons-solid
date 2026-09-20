import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omtdxibhu.css';
import '../../css/f/fsljy5blq.css';
import '../../css/d/dv76i6dzk.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="omtdxibhu"/><path class="fsljy5blq"/><path class="dv76i6dzk"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:germany"} {...others} />);
}

export default Component;
