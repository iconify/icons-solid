import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8fvisblt.css';
import '../../css/t/t-o-xlbsw.css';
import '../../css/p/pyphtmbif.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="n8fvisblt"/><path class="t-o-xlbsw"/><path class="pyphtmbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:pencil"} {...others} />);
}

export default Component;
