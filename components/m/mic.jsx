import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bv3s3n_av.css';
import '../../css/s/s9crwmb9u.css';
import '../../css/c/csvpywbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="bv3s3n_av"/><path class="s9crwmb9u"/><path class="csvpywbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:mic"} {...others} />);
}

export default Component;
