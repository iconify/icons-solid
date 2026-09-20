import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkw7-jbie.css';
import '../../css/n/nvnedvrpl.css';
import '../../css/r/r75br4b2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkw7-jbie"/><path class="nvnedvrpl"/><path class="r75br4b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:moby"} {...others} />);
}

export default Component;
