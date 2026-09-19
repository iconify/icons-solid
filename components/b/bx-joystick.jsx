import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzk36wbku.css';
import '../../css/a/a11bti4rf.css';
import '../../css/m/mhwf7crwk.css';
import '../../css/i/i155fsbdz.css';
import '../../css/f/fh7l_pbbp.css';
import '../../css/u/ufrw3bq5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rzk36wbku"/><circle class="a11bti4rf"/><circle class="mhwf7crwk"/><circle class="i155fsbdz"/><circle class="fh7l_pbbp"/><circle class="ufrw3bq5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-joystick"} {...others} />);
}

export default Component;
