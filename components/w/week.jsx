import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbsg529cw.css';
import '../../css/z/zpickcuei.css';
import '../../css/e/e1c16f-rj.css';
import '../../css/m/mfoxvqbzy.css';
import '../../css/f/f43eqhbwn.css';
import '../../css/u/u99giob-v.css';
import '../../css/s/stjv0pdcv.css';
import '../../css/d/dftf9rvck.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jbsg529cw"/><path class="zpickcuei"/><circle class="e1c16f-rj"/><circle class="mfoxvqbzy"/><circle class="f43eqhbwn"/><circle class="u99giob-v"/><circle class="stjv0pdcv"/><circle class="dftf9rvck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:week"} {...others} />);
}

export default Component;
