import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcxv1dboh.css';
import '../../css/g/gjxkdkbcj.css';
import '../../css/s/s5ic0sbzt.css';
import '../../css/a/a1x-yd-fr.css';
import '../../css/x/x08wk1hjm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgXaznekf"><g class="ft5dv1b6b"><path class="tcxv1dboh"/><path class="gjxkdkbcj"/><circle class="s5ic0sbzt"/><path class="a1x-yd-fr"/><circle class="x08wk1hjm"/></g></mask></defs><path mask="url(#SVGgXaznekf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shopping-bag"} {...others} />);
}

export default Component;
