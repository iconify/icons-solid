import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akkkpkbzd.css';
import '../../css/j/jbxar0t6m.css';
import '../../css/f/flqk8ac0w.css';
import '../../css/h/h9ftfmbbj.css';
import '../../css/l/ljd0s_bvm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="akkkpkbzd"/><path class="jbxar0t6m"/><path class="flqk8ac0w"/><path class="h9ftfmbbj"/><circle class="ljd0s_bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:logo-wikispecies"} {...others} />);
}

export default Component;
