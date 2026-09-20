import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmhysybif.css';
import '../../css/s/sbtxsib7i.css';
import '../../css/e/erzbhu1-s.css';
import '../../css/b/bqg7jocgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zmhysybif"/><path class="sbtxsib7i"/><path class="erzbhu1-s"/><path class="bqg7jocgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:slack"} {...others} />);
}

export default Component;
