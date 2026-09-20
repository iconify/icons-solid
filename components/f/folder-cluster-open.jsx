import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdm7i77zj.css';
import '../../css/k/kmqnegc2d.css';
import '../../css/c/ckfqb96yg.css';
import '../../css/v/vpbxhdc1n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pdm7i77zj"/><circle class="kmqnegc2d"/><circle class="ckfqb96yg"/><circle class="vpbxhdc1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cluster-open"} {...others} />);
}

export default Component;
