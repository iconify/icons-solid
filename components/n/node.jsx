import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r28egxbtw.css';
import '../../css/q/qc8hk8p9a.css';
import '../../css/x/x86ajrbie.css';
import '../../css/h/hfhyg-m5g.css';
import '../../css/v/vy7ke6bke.css';
import '../../css/e/em0ickbet.css';
import '../../css/j/j60zr3b4x.css';
import '../../css/d/dftf9rvck.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="r28egxbtw"/><circle class="qc8hk8p9a"/><circle class="x86ajrbie"/><circle class="hfhyg-m5g"/><circle class="vy7ke6bke"/><path class="em0ickbet"/><circle class="j60zr3b4x"/><circle class="dftf9rvck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:node"} {...others} />);
}

export default Component;
