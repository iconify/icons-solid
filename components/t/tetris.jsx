import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/v928_xtgy.css';
import '../../css/f/f1cguubie.css';
import '../../css/a/as7ag7hfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="v928_xtgy"/><path class="f1cguubie"/><path class="as7ag7hfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:tetris"} {...others} />);
}

export default Component;
