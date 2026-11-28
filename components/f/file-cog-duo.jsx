import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vplzkgbmf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kficvj2pd.css';
import '../../css/x/xannh1nni.css';
import '../../css/b/bh99u_6hm.css';
import '../../css/z/zbvwo5b2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vplzkgbmf"/><g class="dt0cm9dhy primary"><path class="kficvj2pd"/><path class="xannh1nni"/><path class="bh99u_6hm"/><path class="zbvwo5b2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-cog-duo"} {...others} />);
}

export default Component;
